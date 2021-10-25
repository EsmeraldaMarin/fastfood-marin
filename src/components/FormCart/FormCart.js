import React from 'react'
import FormInput from './FormInput'

const FormCart = ({ createOrder, infoUser }) => {

    const activateInput = (e) => {
        e.target.value ? e.target.classList.add('inputActive') : e.target.classList.remove('inputActive')
    }

    return (
        <form className='formCart' onSubmit={(e) => {
            e.preventDefault();
            let formData = new FormData(e.currentTarget)
            let infoUserObj = infoUser(formData)
            createOrder(infoUserObj)
        }}>
            <h3>Tus datos</h3>
            <div>
                <div>
                    <FormInput title='nombre' type='text' activator={activateInput} />
                    <FormInput title='apellido' type='text' activator={activateInput} />
                </div>
                <FormInput title='celular' type='number' activator={activateInput} />
                <FormInput title='localidad' type='text' activator={activateInput} />
                <FormInput title='domicilio' type='text' activator={activateInput} />
                <div>
                    <FormInput title='número' type='number' activator={activateInput} />
                    <FormInput title='piso' type='text' activator={activateInput} />
                </div>
            </div>
            <button type='submit'>Confirmar compra</button>
        </form>
    )
}

export default FormCart
