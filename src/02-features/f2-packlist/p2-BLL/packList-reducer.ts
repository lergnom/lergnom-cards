import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../01-main/bll/store";
import {CardPack, PacksListApi} from "../p3-DAL/packListApi";

const initialState = {
    cardPacks: [] as Array<CardPack>,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 6,
    isFetch: false,
    errorMessage: '',
    myPacks: false,
};

type ActionTypes =
    SetPacksActionType
    | SetPacksTotalCountActionType
    | SetPageCountActionType
    | SetPageActionType
    | SetPreloaderActionType
    | SortByNameCardPackActionType
    | SetMaxCardsCountActionType
    | SetMinCardsCountActionType
    | SetMyPacksActionType


type PacksListStateType = typeof initialState;

export type ThunkType<TActions extends Action> = ThunkAction<Promise<void>,
    AppStoreType,
    unknown,
    TActions>

export const packsListReducer = (state: PacksListStateType = initialState, action: ActionTypes): PacksListStateType => {
    switch (action.type) {
        case "PACKS/SET_MY_PACKS": {
            return {...state, myPacks: action.status};
        }
        case "PACKS/SET_MAX_CARDS_COUNT": {
            return {...state, maxCardsCount: action.max};
        }
        case "PACKS/SET_MIN_CARDS_COUNT": {
            return {...state, minCardsCount: action.min};
        }

        case "PACKS/SORT_BY_NAME_PACK": {
            return {
                ...state, cardPacks: state.cardPacks.sort((a, b) => a.name.localeCompare(b.name))
            };
        }
        case "PACKS/PRELOADER": {
            return {...state, isFetch: action.isFetch};
        }

        case "PACKS/SET_PAGE": {
            return {...state, page: action.page};
        }
        case "PACKS/SET_PAGE_COUNT": {
            return {...state, pageCount: action.count};
        }
        case "PACKS/SET_PACKS_TOTAL_COUNT": {
            return {...state, cardPacksTotalCount: action.totalCount};
        }
        case "PACKS/SET_PACKS": {
            return {...state, cardPacks: action.packs};
        }

        default:
            return state;
    }
};

type SetPacksActionType = ReturnType<typeof setPacks>
type SetPacksTotalCountActionType = ReturnType<typeof setPacksTotalCount>
type SetPageCountActionType = ReturnType<typeof setPageCount>
type SetPageActionType = ReturnType<typeof setPage>
type SetPreloaderActionType = ReturnType<typeof setPreloader>
type SortByNameCardPackActionType = ReturnType<typeof sortByNameCardPack>
type SetMaxCardsCountActionType = ReturnType<typeof setMaxCardsCount>
type SetMinCardsCountActionType = ReturnType<typeof setMinCardsCount>
type SetMyPacksActionType = ReturnType<typeof setMyPacks>


//action
const setPacks = (packs: Array<CardPack>) => ({type: 'PACKS/SET_PACKS', packs} as const);
const setPacksTotalCount = (totalCount: number) => ({type: 'PACKS/SET_PACKS_TOTAL_COUNT', totalCount} as const);
export const setPageCount = (count: number) => ({type: 'PACKS/SET_PAGE_COUNT', count} as const);
export const setPage = (page: number) => ({type: 'PACKS/SET_PAGE', page} as const);
const setError = (errorMessage: string) => ({type: "PACKS/SET_ERROR", errorMessage} as const);
const setMinCardsCount = (min: number) => ({type: "PACKS/SET_MIN_CARDS_COUNT", min} as const);
const setMaxCardsCount = (max: number) => ({type: "PACKS/SET_MAX_CARDS_COUNT", max} as const);
const setMyPacks = (status: boolean) => ({type: "PACKS/SET_MY_PACKS", status} as const);
//set query
export const setPreloader = (isFetch: boolean) => ({type: 'PACKS/PRELOADER', isFetch} as const);
//sortByNameCardPack
export const sortByNameCardPack = () => ({type: 'PACKS/SORT_BY_NAME_PACK'} as const);


// main thunk
export const getPacksCards = (packName?: string, sortPacks?: string) => async (dispatch: Dispatch<ActionTypes>, getState: () => AppStoreType) => {
    const {pageCount, page, minCardsCount, maxCardsCount, myPacks} = getState().packList;
    let user = getState().auth.user;
    let userId;
    if (user && myPacks) {
        userId = user._id;
    }
    try {
        dispatch(setPreloader(true));
        const response = await PacksListApi.getCardsPacks(page, pageCount, packName, minCardsCount, maxCardsCount, userId, sortPacks);
        dispatch(setPacks(response.data.cardPacks));
        dispatch(setPacksTotalCount(response.data.cardPacksTotalCount));
        dispatch(setPageCount(response.data.pageCount));
        dispatch(setPage(response.data.page));
    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};


//Function CRUD
export const addNewPackCard = (payload: { name: string, user_name?: string }): ThunkType<SetPreloaderActionType | SetPageActionType> => async (dispatch) => {
    try {
        dispatch(setPreloader(true));
        await PacksListApi.addNewCardPack(payload);
        await dispatch(getPacksCards());
        dispatch(setPage(1));
    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};

export const deletePackCardById = (id: string): ThunkType<SetPreloaderActionType | SetPageActionType> => async (dispatch) => {
    try {
        dispatch(setPreloader(true));
        await PacksListApi.deleteCardPack(id);
        await dispatch(getPacksCards());
        dispatch(setPage(1));

    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};


export const updatePackCard = (payload: { _id: string, name: string, private?: boolean }): ThunkType<SetPreloaderActionType | SetPacksActionType | SetPageActionType> => async (dispatch) => {
    try {
        dispatch(setPreloader(true));
        await PacksListApi.updateCardPack(payload);
        await dispatch(getPacksCards());
        dispatch(setPage(1));

    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};

export const getMinCountPackCard = (min: number): ThunkType<SetPreloaderActionType | SetMinCardsCountActionType | SetPageActionType> => async (dispatch) => {
    try {
        dispatch(setPreloader(true));
        dispatch(setMinCardsCount(min));
        await dispatch(getPacksCards());
        dispatch(setPage(1));
    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};

export const getMaxCountPackCard = (max: number): ThunkType<SetPreloaderActionType | SetMaxCardsCountActionType | SetPageActionType> => async (dispatch) => {
    try {
        dispatch(setPreloader(true));
        dispatch(setMaxCardsCount(max));
        await dispatch(getPacksCards());
        dispatch(setPage(1));

    } catch (err) {
        console.log('error :(', err);
    } finally {
        dispatch(setPreloader(false));
    }
};


export const getMyPacksCards = (status: boolean) => (dispatch: Dispatch<SetMyPacksActionType>) => {
    dispatch(setMyPacks(status));
};


