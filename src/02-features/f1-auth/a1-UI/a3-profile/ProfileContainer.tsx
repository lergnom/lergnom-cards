import React, {useEffect, useState} from "react";
import s from "./ProfileContainer.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../01-main/bll/store";
import {UserType} from "../../a3-DAL/authApi";
import {Profile} from "./Profile";
import {Redirect, useParams, useRouteMatch} from "react-router-dom";
import {PATH} from "../../../../01-main/ui/routes/Routes";
import {requestOnLogoutUser} from "../../a2-BLL/auth-reducer";
import {ToggleCheckBox} from "../../../../03-common/components/CheckBoxToggle/ToggleCheckBox";
import {PackListContainer} from "../../../f2-packlist/p1-UI/PackListContainer";
import {getMyPacksCards} from "../../../f2-packlist/p2-BLL/packList-reducer";
import {SuperInput} from "../../../../03-common/components/SuperInput/SuperInput";
import useDebounce from "../../../../03-common/helpers/Debounce";
import {AddCardPackModalContainer} from "../../../../03-common/components/modalsContainers/AddCardPackModalContainer";

export const ProfileContainer: React.FC = () => {
    const [searchPackName, setSearchPackName] = useState<string>('');
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
    const dispatch = useDispatch();
    const onLogoutHandler = () => dispatch(requestOnLogoutUser());
    const myPack = useSelector<AppStoreType, boolean>(state => state.packList.myPacks);

    const changeCheckedMyPacks = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getMyPacksCards(e.currentTarget.checked));
    };

    const debouncedSearchPackName = useDebounce(searchPackName, 1000);

    useEffect(() => {
        if (debouncedSearchPackName) {
            setSearchPackName(debouncedSearchPackName);
        }
    }, [debouncedSearchPackName]);

    if (!user && isInitialized) return <Redirect to={PATH.LOGIN_PAGE}/>;


    return (
        <>
            <div className={s.container}>

                <Profile title={"CARD PACK"} subtitle={"закрепление навыков"} avatar={user?.avatar}
                         userName={user?.name}>
                    <ul>
                        <li><span style={{marginRight: "5px"}}>Мои</span><ToggleCheckBox
                            title={"Show me my packs... quickly :)"} onChange={changeCheckedMyPacks}
                            checked={myPack}/>
                        </li>
                        <li>
                            <span style={{display: "inline-block", marginBottom: "5px"}}>Поиск по названию:   </span>
                            <SuperInput value={searchPackName} onChangeText={setSearchPackName}
                                        title={"Search by Pack Name   🔍"}/>
                        </li>
                        <li><AddCardPackModalContainer buttonTitle={"Добавить новую колоду"}
                                                       title={"Open modal window for add new PackCard"}/></li>
                        <li><a onClick={onLogoutHandler}>Выход</a></li>
                    </ul>

                </Profile>

                <div className={s.rightSide}>
                    <PackListContainer searchName={debouncedSearchPackName}/>
                </div>
            </div>
        </>
    );
};