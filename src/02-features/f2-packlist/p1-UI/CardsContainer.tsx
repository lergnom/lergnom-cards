import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {HeaderOptionType, Table} from "../../../03-common/components/Table/Table";
import s from "./PacksList.module.css";
import {PreLoader} from "../../../03-common/components/PreLoader/PreLoader";

export const CardsContainer = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    // const cardsList = useSelector<AppStoreType, Array<ICardType>>(state => state.cards.cardsList);
    // const cardsTotalCount = useSelector<AppStoreType, number>(state => state.cards.cardsTotalCount);
    // const page = useSelector<AppStoreType, number>(state => state.cards.page);
    // const pageCount = useSelector<AppStoreType, number>(state => state.cards.pageCount);
    // const loading = useSelector<AppStoreType, boolean>(state => state.cards.loading);
    // const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
    // const user = useSelector<AppStoreType, UserType | null>(state => state.signIn.user);

    const {cardPackId} = useParams<{ cardPackId: string }>();

    useEffect(() => {
        // dispatch(setCardPackId(cardPackId));
    }, [cardPackId]);

    // useEffect(() => {
    //     cardPackId && dispatch(getCardsTC());
    // }, [page, pageCount, cardPackId]);

    // const changePageHandler = (page: number) => dispatch(setPage(page));
    // const addCardHandler = () => dispatch(addCardTC());
    // const historyBack = () => {
    //     dispatch(setPage(1));
    //     history.goBack();
    // };

    const tableHeaders: Array<HeaderOptionType> = [{headerTitle: "Question"}, {headerTitle: "Answer"}, {headerTitle: "Update"}, {headerTitle: "Grade"}];
    // const tableBody = <TableBody cardsList={cardsList}/>;

    return (
        <>
            <div className={s.packsListHeaderWrapper}>
               {/* {isFetching && <PreLoader/>}*/}
            </div>
            <Table tableHeaders={tableHeaders}/>
            <div>
                {/*        <Pagination
                    totalCount={cardsTotalCount}
                    count={pageCount}
                    page={page}
                    onChangePage={changePageHandler}/>*/}
            </div>
        </>
    );
};