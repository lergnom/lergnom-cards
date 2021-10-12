import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './CardsTableBody.module.css';
import {AppStoreType} from "../../../01-main/bll/store";
import { CardType } from "../p3-DAL/packListApi";
import { UserType } from "../../f1-auth/a3-DAL/authApi";
import {deleteCardTC, updateCardTC} from "../p2-BLL/cards-reducer";
import SuperButton from "../../../03-common/components/SuperButton/SuperButton";

type CardsTableBody = {
    cardsList: Array<CardType>
}
export const TableBody: React.FC<CardsTableBody> = ({cardsList}) => {
    // debugger
    const [edit, setEdit] = useState<boolean>(false);
    const [editId, setEditId] = useState<string>('');
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');

    const dispatch = useDispatch();
    const searchQuestion = useSelector<AppStoreType, string>(state => state.cards.searchQuestion);
    const searchAnswer = useSelector<AppStoreType, string>(state => state.cards.searchAnswer);
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);

    let myId = '';
    if (user) myId = user._id;

    const cardListView = cardsList
        .filter(card => card.question.indexOf(searchQuestion) > -1)
        .filter(card => card.answer.indexOf(searchAnswer) > -1);

    return (
        <>
            {cardListView.map(card => {
                const deleteCardHandler = () => dispatch(deleteCardTC(card._id));
                const updateCardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
                    if (e.currentTarget.innerText === 'edit') {
                        myId === card.user_id && setEdit(true);
                        setEditId(card._id);
                        setQuestion(card.question);
                        setAnswer(card.answer);
                    }
                    if (e.currentTarget.innerText === 'update') {
                        dispatch(updateCardTC(editId, question, answer));
                        myId === card.user_id && setEdit(false);
                    }
                };

                const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value);
                const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.currentTarget.value);

                return (
                    <tr key={card._id}>
                        <td>
                            {editId === card._id && edit
                                ? <input onChange={onChangeQuestion} value={question}/>
                                : card.question}
                        </td>
                        <td>
                            {editId === card._id && edit
                                ? <input onChange={onChangeAnswer} value={answer}/>
                                : card.answer}
                        </td>
                        <td>{card.updated}</td>
                        <td>{card.grade}</td>
                        <td>
                            {myId === card.user_id && <SuperButton
                                className={s.btnCRUD}
                                onClick={deleteCardHandler}
                                btnRed> delete
                            </SuperButton>}

                            {myId === card.user_id && <SuperButton
                                className={s.btnCRUD}
                                onClick={updateCardHandler}>
                                {editId === card._id && edit ? 'update' : 'edit'}
                            </SuperButton>}

                            {/*<Button*/}
                            {/*    className={s.btnCRUD} >learn </Button>*/}
                        </td>
                    </tr>
                );
            })}
        </>
    );
};