import styles from './Form.module.css'
import { FaUser, FaLock } from "react-icons/fa";
import LinkButton from '../LinkButton/LinkButton';
import { useState, useEffect } from 'react';

function useFormik({ initialValues, validate }) {

    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(initialValues)
    
    useEffect(() => {
        console.log('campo alterado', values)
        validateValues(values)
    }, [values])

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name')
        const value = event.target.value
        setValues({
            ...values,
            [fieldName]: value
        })

    }

    function handleBlur(event) {
        const fieldName = event.target.getAttribute('name')
        console.log(fieldName)
        setTouched({
            ...touched,
            [fieldName]: true
        })
    }

    function validateValues(values) {
        setErrors(validate(values))
    }

    return {
        values,
        errors,
        touched,
        handleBlur,
        setErrors,
        handleChange
    }
}

function Form() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: function (values) {
            const errors = {}
        
            if(!values.email.includes('@')) {
                errors.email = 'Insira um email válido.'
            }
        
            if(values.password.length < 8) {
                errors.password = 'Insira uma senha válida'
            }
        
            return errors
        }
    })

    function cadastrarUsuario(e) {

        if (formik.errors.email === undefined && formik.errors.password === undefined){
            console.log(formik.values)
            console.log('cadastrado')
        } else if (formik.touched === false){
            console.log(formik.errors, 'errors')
            e.preventDefault()
        } else {
            console.log(formik.errors, 'errors')
            e.preventDefault()
        }
        
    }

    return(
        <div className={styles.form}>
            <form onSubmit={cadastrarUsuario}
            >
                <div className={styles.form_container}>
                    <FaUser />
                    <input className={styles.btn}
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Digite seu email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> <br />
                    {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
                </div>
                <div className={styles.form_container}>
                    <FaLock />
                    <input className={styles.btn}
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        value={formik.values.password}
                        autoComplete="off"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> <br />
                    {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
                </div>
                <div>
                    <LinkButton
                        type="submit"
                        text="Entrar"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form