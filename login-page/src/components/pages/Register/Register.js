import styles from "./Register.module.css";
import RegisterForm from "../../Form/RegisterForm";

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.form_area}>
        <h1>Grab</h1>
        <RegisterForm />
        <div className={styles.login_area}>
          <p>Já tem uma conta?</p>
          <a href="/">Fazer login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
