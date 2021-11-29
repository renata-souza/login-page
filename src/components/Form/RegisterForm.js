import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { FaUser, FaLock, FaAt } from "react-icons/fa";
import LinkButton from "../LinkButton/LinkButton";

function Form() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function register(e) {
    if (
      errors.name === undefined &&
      errors.email === undefined &&
      errors.password === undefined
    ) {
      newUser(values);
    } else if (touched === false) {
      console.log(errors, "errors");
      e.preventDefault();
    } else {
      console.log(errors, "errors");
      e.preventDefault();
    }
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");
    setTouched({
      ...touched,
      [fieldName]: true,
    });
  }

  function handleError(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Campo obrigatório.";
    }

    if (!values.email.includes("@")) {
      errors.email = "Insira um email válido.";
    }

    if (values.password.length < 8) {
      errors.password = "Mínimo de 8 caracteres";
    }

    return errors;
  }

  function validateValues(values) {
    setErrors(handleError(values));
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function newUser(user) {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.form}>
      <form onSubmit={register}>
        <div className={styles.form_container}>
          <FaUser />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          <br />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.form_container}>
          <FaAt />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu email"
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          <br />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.form_container}>
          <FaLock />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />{" "}
          <br />
          {touched.password && errors.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <LinkButton type="submit" text="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
