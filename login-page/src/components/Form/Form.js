import { useState } from 'react'
import styles from './Form.module.css'
import { FaUser, FaLock } from "react-icons/fa";
import LinkButton from '../LinkButton/LinkButton';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log('cadastrado')
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

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
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className={styles.form_container}>
                    <FaLock />
                    <input className={styles.btn}
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
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