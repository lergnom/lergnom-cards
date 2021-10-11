import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updatePackCard} from "../../../02-features/f2-packlist/p2-BLL/packList-reducer";
import s from './EditCardPack.module.css';
import SuperButton from "../SuperButton/SuperButton";
import {Modal} from "./Modal";
import {SuperInput} from "../SuperInput/SuperInput";

type AddItemModalContainerTypeProps = {
    isButtonDisabled?: boolean,
    oldName?: string,
    packId?: string,
}

export const EditCardPackModalContainer = (
    {
        isButtonDisabled,
        oldName = '',
        packId = '',
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

    useEffect(() => {
        setChangeNameCardPack(oldName);
    }, [oldName]);

    const [changeNameCardPack, setChangeNameCardPack] = useState<string>('');

    const onChangeHandlerChangeNameCardPack = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeNameCardPack(e.currentTarget.value);
    };

    const clickHandlerEditPackById = (_id: string) => {
        if (packId !== '') {
            dispatch(updatePackCard({_id, name: changeNameCardPack}));
            setShow(false);
        }
    };

    return (
        <div className={s.wrapContainer}>
            <SuperButton disabled={isButtonDisabled} onClick={clickHandlerShowModal}
                         title={"Show modal for edit"}> edit </SuperButton>
            <Modal show={show} backgroundOnClick={clickHandlerHiddenModal} width={413} height={240}>
                <h1>Edit CardPack name</h1>
                <SuperInput autoFocus onChange={onChangeHandlerChangeNameCardPack} value={changeNameCardPack}
                            title={"Edit PackName"}/>
                <div>
                    <SuperButton disabled={isButtonDisabled} onClick={() => {
                        clickHandlerEditPackById(packId);
                    }} title={"Update or not update?..."}>Update</SuperButton>
                    <SuperButton title={"Maybe, not update..."} disabled={isButtonDisabled}
                                 onClick={clickHandlerHiddenModal}> No</SuperButton>
                </div>
            </Modal>
        </div>
    );
};