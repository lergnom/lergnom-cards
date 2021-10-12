import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: "http://localhost:7542/2.0/",
});

export  type ResponseType<D = {}> = {
    cardPacks: D,
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,
    token: string,
    tokenDeathTime: number,
}

export type CardPack = {
    cardsCount: number,
    created: string,
    grade: number,
    more_id: string,
    name: string,
    path: string,
    private: boolean,
    rating: number,
    shots: number,
    type: string,
    updated: string,
    user_id: string,
    user_name: string,
    __v: number,
    _id: string
}

export type CardType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}



export const PacksListApi = {
    getCardsPacks(page?: number, pageCount?: number, packName?: string, min?: number, max?: number, user_id?: string, sortPacks?: string) {
        return instance.get<ResponseType<Array<CardPack>>>('cards/pack/', {
            params: {
                page,
                pageCount,
                packName,
                min,
                max,
                user_id,
                sortPacks
            }
        });
    },

    addNewCardPack(payload: { name: string, user_name?: string }) {
        return instance.post(`cards/pack/`, {cardsPack: payload});
    },
    deleteCardPack(id: string) {
        return instance.delete(`cards/pack/?id=${id}`);
    },
    updateCardPack(payload: { _id: string, name: string, private?: boolean }) {
        return instance.put(`cards/pack/`, {cardsPack: payload});
    },

    getCards(packListId: string, page?: number, pageCount?: number) {
        return instance.get<ResponseType<Array<CardType>>>(`/cards/card`, {
            params: {
                cardsPack_id: packListId,
                page,
                pageCount, // количество карточек за один запрос
            }
        })
    },

    addNewCard(payload: { cardsPack_id: string, question?: string, answer?: string }) {
        return instance.post<ResponseType>(`/cards/card`, {card: payload});
    },
    deleteCard(id: string) {
        return instance.delete(`/cards/card?id=${id}`);
    },
    updateCard(payload: { _id: string, question: string, answer: string }) {
        return instance.put(`/cards/card`, {card: payload});
    },
};