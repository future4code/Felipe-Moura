import React from 'react'
import { LabelInput, InputsForm } from './InputsStyles'

function Input({label, type, name, value, onChange, error, onBlur}) {
    return (
        <div>
            <LabelInput htmlFor={name}>{label}</LabelInput>
            <InputsForm type={type} id={name} name={name} onChange={onChange} value={value} />
            
        </div>
    )
}

export default Input
