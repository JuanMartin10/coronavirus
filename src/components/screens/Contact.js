import React, { useReducer, useState } from 'react';
import Label from '../UI/Label';
import FormGroup from '../UI/FormGroup'

const MODIFY_INPUT = 'MODIFY_INPUT';

const initialState = {
    fullname: '',
    email: '',
    message: ''
}

const reducer = (state, action) => {
    if (action.type === MODIFY_INPUT) {
        return {
            ...state,
            [action.field]: action.value
        };
    } else {
        return state
    }
}


const Contact = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [image, setImage] = useState(null);


    const handleSubmit = e => {
        const { fullname, email, message } = state
        e.preventDefault()
        console.log(`${fullname} ${email} ${message}`)
    }

    const handleChangeInput = e => {
        dispatch({
            type: MODIFY_INPUT,
            field: e.target.name,
            value: e.target.value
        })
    }


    const handleChangeFile = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormGroup>
                    <Label>Nombre completo</Label>
                    <input name='fullname' type='text' value={state.fullname} onChange={handleChangeInput}></input>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <input name='email' type='text' value={state.email} onChange={handleChangeInput}></input>
                </FormGroup>
                <FormGroup>
                    <Label>Mensaje</Label>
                    <textarea name='message' value={state.message} onChange={handleChangeInput} />
                </FormGroup>
                <FormGroup>
                    <Label>Foto</Label>
                    <input type='file' onChange={handleChangeFile}></input>
                    {image && <img src={image} alt='Imagen' />}
                </FormGroup>
                <input type='submit' value='Enviar' />
            </div>
        </form >
    )
}

export default Contact