import React, {useEffect} from "react";
import s from "./TableUsers.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../bll/store";
import {InitStateType, setUsers} from "../bll/user-reducer";
import {SuperCheckbox} from "./common/components/SuperCheckBox/SuperCheckBox";

export const TableUsers = () => {
    const users = useSelector<AppStoreType, Array<InitStateType>>(state => state.users);
    const dispatch = useDispatch();

    const JSX = users.map(user => {
        return (
            <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td><SuperCheckbox checked={user.isAdmin}></SuperCheckbox></td>
            </tr>
        );
    });


    useEffect(() => {
        dispatch(setUsers());
    }, []);

    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>isAdmin?</th>
            </tr>
            </thead>
            <tbody>
            {JSX}
            </tbody>
        </table>
    );
};

