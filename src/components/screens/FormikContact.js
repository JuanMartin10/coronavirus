import React from 'react';

import { Formik } from 'formik';
import Label from '../UI/Label';
import FormGroup from '../UI/FormGroup'

const initialValues = {
    fullname: '',
    email: '',
    message: ''
}

const validateForm = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = 'El nombre es requerido'
    };
    if (!values.email) {
        errors.email = 'El email es requerido'
    }
    return errors;
}

const FormikContact = () => {

    const handleSubmit = values => {
        console.log(values)
    }

    return (
        <div>
            <h1>Formulario de contacto</h1>
            <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit} >
                {
                    ({ values, errors, touched, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Nombre completo</Label>
                                <input type='text' name='fullname' value={values.fullname} onChange={handleChange}></input>
                                {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <input type='text' name='email' value={values.email} onChange={handleChange}></input>
                                {errors.email && touched.email && <p>{errors.email}</p>}
                            </FormGroup>
                            <button type="submir"> Enviar</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikContact;