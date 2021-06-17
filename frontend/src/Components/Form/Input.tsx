import React from 'react';
import ValidationHelper from '../../Helpers/ValidationHelper';

interface Props {
    name: string,
    type: string,
    label: string,
    placeholder?: string,
    value: any,
    errors?: {},
    required: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ name, value, label, errors, onChange, type = 'text', required = false, placeholder }) => {
    return (
        <div className={`form-group ` + (errors && ValidationHelper.hasError(name, errors) ? 'has-error' : '')}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
            />
            { errors ? 
                <span className="errors text-xs text-red-500 w-full flex justify-end">{ValidationHelper.getErrors(name, errors)}</span>
                : ''
            }
        </div>
    );
}

export default Input;