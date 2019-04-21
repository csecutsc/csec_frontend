import React from 'react';
import '@styles/components/Input.scss';
import { useBem } from '../util';

export const Input = ({ label, className, ...inputProps }) => {
    const { name, disabled } = inputProps;
    const cname = useBem('input', [ disabled && 'disabled' ]);
    return (
        <div className={`${ cname }${ className? ` ${ className }` : '' }`}>
            <label className='input__label' htmlFor={ name }>{ label }</label>
            <input className='input__input' { ...inputProps }/>
        </div>
    );
};