import React from 'react'

const FormInput = ({ title, type, activator }) => {
    return (
        <div className="form-floating">
            <input type={type} className={title} name={title} id={`float${title}`} /* required */ onChange={(e) => activator(e)} />
            <label htmlFor={`float${title}`}>{title} *</label>
        </div>
    )
}

export default FormInput
