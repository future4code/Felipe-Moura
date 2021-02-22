import React from 'react'

function Input({label, type, name, value, onChange, error, onBlur}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} onChange={onChange} value={value} />
            
        </div>
    )
}

export default Input
