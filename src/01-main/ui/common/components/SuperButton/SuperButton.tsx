import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    btnPrimary?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = ({btnPrimary, className, ...restProps}) => {
    const finalClassName = `${btnPrimary ? s.btnPrimary : s.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
};

export default SuperButton;
