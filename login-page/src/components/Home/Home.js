import logo from '../../img/programmer.svg'
import Input from '../Input/Input'
import LinkButton from '../LinkButton/LinkButton'
import styles from './Home.module.css'
import { FaUser, FaLock } from 'react-icons/fa' 
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.form_area}>
                <h1>Grab</h1>
                <form>
                    <div className={styles.form_container}>
                        <FaUser />
                        <Input type="email" placeholder="E-mail"/>
                    </div>
                    <div className={styles.form_container}>
                        <FaLock />
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <Link to="/profile"> <LinkButton type="button" text="Entrar" /> </Link>
                </form>
            </div> 
            <div className={styles.img_area}>
                <img src={logo} alt="programmer" />
            </div>
        </div>
    )
}

export default Home
