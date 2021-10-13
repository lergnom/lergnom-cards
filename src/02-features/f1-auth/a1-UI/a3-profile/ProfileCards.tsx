import React from "react";
import s from "./ProfileContainer.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../01-main/bll/store";
import {UserType} from "../../a3-DAL/authApi";
import {Profile} from "./Profile";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {PATH} from "../../../../01-main/ui/routes/Routes";
import {requestOnLogoutUser} from "../../a2-BLL/auth-reducer";
import {AddCardPackModalContainer} from "../../../../03-common/components/modalsContainers/AddCardPackModalContainer";
import {CardsContainer} from "../../../f2-packlist/p1-UI/CardsContainer";
import {AddCardModalContainer} from "../../../../03-common/components/modalsContainers/AddCardModalContainer";

export const ProfileCards: React.FC = () => {
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
    const history = useHistory();
    const dispatch = useDispatch();
    const onLogoutHandler = () => dispatch(requestOnLogoutUser());

    const {cardPackId} = useParams<{ cardPackId: string }>();


    const onHandlerBackButton = () => {
        history.goBack();
    };

    if (!user && isInitialized) return <Redirect to={PATH.LOGIN_PAGE}/>;


    return (
        <>
            <div className={s.container}>

                <Profile title={"CARD PACK"} subtitle={"закрепление навыков"} avatar={user?.avatar}
                         userName={user?.name}>
                    <ul>
                        <li><AddCardModalContainer buttonTitle={"Новый вопрос-ответ"}
                                                       title={"Open modal window for add new PackCard"}/></li>
                        <li><a onClick={onHandlerBackButton}>Назад</a></li>
                        <li><a onClick={onLogoutHandler}>Выход</a></li>
                    </ul>

                </Profile>

                <div className={s.rightSide}>
                    <CardsContainer/>
                </div>
            </div>
        </>
    );
};