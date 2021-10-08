import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react';
import s from './SuperInput.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    changeType?: string
}

export const SuperInput: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        changeType = 'text',

        ...restProps
    }
) => {

    const [editInputType, setEditInputType] = useState(changeType);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter();
    };

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`;
    const finalInputClassName = `${s.superInput}  ${error ? s.errorInput : ''} `;


    const onMouseOverHandler = () => {
        setEditInputType('text');
    };

    const onMouseOutHandler = () => {
        setEditInputType('password');
    };


    return (
        <>
            <div className={s.inputEyeWrapper}>
                <input
                    type={changeType ? editInputType : 'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    {...restProps}
                />

                {changeType === 'password' && <span className={s.eye} onMouseOver={onMouseOverHandler}
                                                    onMouseOut={onMouseOutHandler}/>}
            </div>
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
};
