import logo from "../../../img/programmer.svg";
import styles from "./Home.module.css";
import LoginForm from "../../Form/LoginForm";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.form_area}>
        <h1>Grab</h1>
        <LoginForm />
      </div>
      <div className={styles.img_area}>
        <img src={logo} alt="programmer" />
        <div className={styles.register_area}>
          <p>Ainda não tem uma conta?</p>
          <a href="/register">Cadastre-se!</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
