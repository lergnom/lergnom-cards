import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useParams} from "react-router-dom";
import s from "./LearnContainer.module.css";
import {getQuestions, getQuestionsAfterAnswer, setNewQuestNumber} from "../l2-BLL/learn-reducer";
import {CardType} from "../l3-DAL/learnApi";
import {Question} from "./Question/Question";
import { AppStoreType } from "../../../01-main/bll/store";
import {UserType} from "../../f1-auth/a3-DAL/authApi";
import { PATH } from "../../../01-main/ui/routes/Routes";
import {PreLoader} from "../../../03-common/components/PreLoader/PreLoader";
import SuperButton from "../../../03-common/components/SuperButton/SuperButton";

export const LearnContainer = () => {
    const dispatch = useDispatch();
    const questions = useSelector<AppStoreType, Array<CardType>>(state => state.learn.cards);
    const {cardPackId, cardPackName} = useParams<{ cardPackId: string, cardPackName: string }>();
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);
    const questNumber = useSelector<AppStoreType, number>(state => state.learn.questNumber);

    const isFetch = useSelector<AppStoreType, boolean>(state => state.learn.isFetch);

    //Search card
    useEffect(() => {
        dispatch(getQuestions(cardPackId));
    }, []);

    // DeleteCard, And update
    const exmapleClick = (id: string, rate: number) => {

        dispatch(getQuestionsAfterAnswer(id, rate));
    };

    // Effect Change Random Question
    useEffect(() => {
        if (questions.length) {
            dispatch(setNewQuestNumber(questions.length - 1));
        }
    }, [questNumber, exmapleClick]);


    if (!user) {
        return <Redirect to={PATH.LOGIN_PAGE}/>;
    }
    if (isFetch) return <PreLoader/>;
    return (
        <>
            <div className={s.wrapper}>
                {!isFetch && questNumber >= 0 && questions.length > 0 && <Question card={questions[questNumber]}
                                                                                   cardName={cardPackName}
                                                                                   returnAction={exmapleClick}/>}
                {questions.length <= 0 &&
                <div>
                    <div style={{marginBottom: "10px"}}>Voprosov bolshe net. V otvet ne slblshno....</div>
                    <Link to={PATH.PROFILE_PAGE}><SuperButton>Back</SuperButton></Link>
                </div>}
            </div>
        </>
    );
};

