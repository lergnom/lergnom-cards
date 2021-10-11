import React, {useState} from "react";
import {useDispatch} from "react-redux";
import s from './DeleteCardPack.module.css';
import {deletePackCardById} from "../../../02-features/f2-packlist/p2-BLL/packList-reducer";
import SuperButton from "../SuperButton/SuperButton";
import {Modal} from "./Modal";

type AddItemModalContainerTypeProps = {
    isButtonDisabled?: boolean
    namePack?: string,
    deleteId?: string
}

export const DeleteCardPackModalContainer = (
    {
        isButtonDisabled,
        namePack = 'Oops nothing',
        deleteId = ''
    }: AddItemModalContainerTypeProps) => {

    const [show, setShow] = useState(false);
    //Show modal
    const clickHandlerShowModal = () => {
        setShow(true);
    };
    const clickHandlerHiddenModal = () => {
        setShow(false);
    };

    const dispatch = useDispatch();

    const clickHandlerDeleteCardPackById = (id: string) => {
        if (id !== '') {
            dispatch(deletePackCardById(id));
            setShow(false);
        }

    };
    return (
        <div className={s.wrapContainer}>
            <SuperButton disabled={isButtonDisabled} onClick={clickHandlerShowModal}
                         title={"Show modal for delete"}> delete</SuperButton>
            <Modal show={show} backgroundOnClick={clickHandlerHiddenModal} width={413} height={240}>
                <h1>Delete CardPack</h1>
                Are you sure you want delete: <span>{namePack}</span>
                <div>
                    <SuperButton title={"After press i don't know :("} disabled={isButtonDisabled} onClick={() => {
                        clickHandlerDeleteCardPackById(deleteId);
                    }}>Yes</SuperButton>
                    <SuperButton title={"Yes, yes, yes :)"} disabled={isButtonDisabled}
                                 onClick={clickHandlerHiddenModal}> No</SuperButton>
                </div>
            </Modal>
        </div>
    );
};