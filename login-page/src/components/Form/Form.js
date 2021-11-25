import { useState, useEffect } from 'react'
import styles from './Form.module.css'
import { FaUser, FaLock } from "react-icons/fa";
import LinkButton from '../LinkButton/LinkButton';

function Form() {

    const initialValues = {
        email:'',
        password:''
    }
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        console.log('campo alterado', values)
        validateValues(values)
    }, [values])

    function cadastrarUsuario(e) {

        if (errors.email === undefined && errors.password === undefined){
            console.log(values)
            console.log('cadastrado')
        } else if (touched === false){
            console.log(errors, 'errors')
            e.preventDefault()
        } else {
            console.log(errors, 'errors')
            e.preventDefault()
        }
        
    }

    function handleBlur(event) {
        const fieldName = event.target.getAttribute('name')
        setTouched({
            ...touched,
            [fieldName]: true
        })
    }

    function handleError(values) {
        const errors = {}
    
        if(!values.email.includes('@')) {
            errors.email = 'Insira um email válido.'
        }
    
        if(values.password.length < 8) {
            errors.password = 'Insira uma senha válida'
        }
    
        return errors
    }

    function validateValues(values) {
        setErrors(handleError(values))
    }

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name')
        const value = event.target.value
        setValues({
            ...values,
            [fieldName]: value
        })
    }

    return(
        <div className={styles.form}>
            <form onSubmit={cadastrarUsuario}>
                <div className={styles.form_container}>
                    <FaUser />
                    <input className={styles.btn}
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Digite seu email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /> <br />
                    {touched.email && errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.form_container}>
                    <FaLock />
                    <input className={styles.btn}
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                    /> <br />
                    {touched.password && errors.password && <span>{errors.password}</span>}
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