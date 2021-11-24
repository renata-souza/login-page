import logo from "../../img/programmer.svg";
import styles from "./Home.module.css";
import Form from "../Form/Form";

function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.form_area}>
                <h1>Grab</h1>
                <Form />
            </div>
            <div className={styles.img_area}>
                <img src={logo} alt="programmer" />
            </div>
        </div>
    );
}

export default Home;
