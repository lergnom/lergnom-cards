import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addNewPackCard} from "../../../02-features/f2-packlist/p2-BLL/packList-reducer";
import SuperButton from "../SuperButton/SuperButton";
import {SuperInput} from "../SuperInput/SuperInput";
import {Modal} from "./Modal";

type AddItemModalContainerTypeProps = {
    isButtonDisabled?: boolean
    buttonTitle?: string
    title?: string
}

export const AddCardPackModalContainer = ({
                                              isButtonDisabled,
                                              buttonTitle = 'button', title
                                          }: AddItemModalContainerTypeProps) => {
    const [packName, setPackName] = useState<string>('');
    const [show, setShow] = useState(false);

    //For  test field
    // useEffect(() => {
    //     const test = setTestData();
    //     setPackName(test['name']);
    // }, []);

    //Show modal
    const clickHandlerShowModal = () => {
        setShow(true);
    };
    const clickHandlerHiddenModal = () => {
        setShow(false);
    };

    const dispatch = useDispatch();

    //Added new pack and new query Cards Pack
    const clickHandlerAddNewPack = () => {
        setShow(false);
        dispatch(addNewPackCard({name: packName, user_name: 'name'}));
        //Add Test data
        // const test = setTestData();
        setPackName(packName);
        setPackName('');
    };

    return (
        <>
            <div>
                {/*     <SuperButton btnPrimary title={title} disabled={isButtonDisabled}
                             onClick={clickHandlerShowModal}> {buttonTitle}</SuperButton>*/}
                <a onClick={clickHandlerShowModal}>{buttonTitle}</a>
            </div>

            <Modal show={show} backgroundOnClick={clickHandlerHiddenModal} width={413} height={240}>
                <h1>Добавить колоду</h1>
                <SuperInput value={packName} onChangeText={setPackName} title={"Add new Pack Name"}/>
                <SuperButton btnPrimary title={"Add new CardPack"} disabled={isButtonDisabled}
                             onClick={clickHandlerAddNewPack}> +
                    New
                    Pack</SuperButton>
            </Modal>
        </>
    );
};