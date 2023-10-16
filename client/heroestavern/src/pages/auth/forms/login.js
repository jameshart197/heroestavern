import React, { useState } from "react";
import styles from "../auth.module.css";
import ErrorMessage from "../../../components/errormessage/errormessage";
import { useNavigate } from "react-router-dom";
import { login } from "../../../helpers/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(loginData);
      navigate("/", { replace: true });
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <form action="POST" onSubmit={handleSubmit} className={styles.authForm}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <ErrorMessage
        errors={errors}
        field="username"
        errorlevel="warning"
      ></ErrorMessage>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <ErrorMessage
        errors={errors}
        field="password"
        errorlevel={"warning"}
      ></ErrorMessage>
      <input type="submit" onChange={handleChange} />
      <ErrorMessage
        errors={errors}
        field="non_field_errors"
        errorlevel={"warning"}
      ></ErrorMessage>
    </form>
  );
};

export default LoginForm;