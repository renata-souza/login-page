import styles from './Form.module.css'
import { FaUser, FaLock } from "react-icons/fa";
import LinkButton from '../LinkButton/LinkButton';
import { useState } from 'react';

function useFormik({ initialValues }) {

    const [values, setValues] = useState(initialValues)
    
    function handleChange(event) {
        const fieldName = event.target.getAttribute('name')
        const value = event.target.value
        setValues({
            ...values,
            [fieldName]: value
        })
    }

    return {
        values,
        handleChange
    }
}

function Form() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
    })

    return(
        <div className={styles.form}>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(formik.values)
            }}>
                <div className={styles.form_container}>
                    <FaUser />
                    <input className={styles.btn}
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Digite seu email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
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
                    />
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