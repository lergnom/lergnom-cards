import React, {useState} from "react";
import {useDispatch} from "react-redux";
import SuperButton from "../SuperButton/SuperButton";
import {SuperInput} from "../SuperInput/SuperInput";
import {Modal} from "./Modal";

type AddItemModalContainerTypeProps = {
    isButtonDisabled?: boolean
    buttonTitle?: string
    title?: string
}

export const AddCardModalContainer = ({
                                          isButtonDisabled,
                                          buttonTitle = 'button', title
                                      }: AddItemModalContainerTypeProps) => {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [show, setShow] = useState(false);


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
        // dispatch(addNewPackCard({name: packName, user_name: 'name'}));
        //Add Test data
        // const test = setTestData();
        // setPackName(packName);
        setQuestion('');
    };

    return (
        <>
            <div>
                <a onClick={clickHandlerShowModal}>{buttonTitle}</a>
            </div>

            <Modal show={show} backgroundOnClick={clickHandlerHiddenModal} width={413} height={290}>
                <h1 style={{color: 'black'}}>Добавить карту</h1>
                <label>Question:</label>
                <SuperInput autoFocus value={question} onChangeText={setQuestion} title={"Add question"}/>
                <label>Answer:</label>
                <SuperInput value={answer} onChangeText={setAnswer} title={"Add Answer"}/>
                <SuperButton btnPrimary title={"Add new CardPack"} disabled={isButtonDisabled}
                             onClick={clickHandlerAddNewPack}>add card</SuperButton>
            </Modal>
        </>
    );
};