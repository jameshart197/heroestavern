import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import ErrorMessage from "../../../components/errormessage/errormessage";
import { registerUser } from "../../../helpers/caching.service.api";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(signUpData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <main>
      <form action="POST" onSubmit={handleSubmit} className={styles.authForm}>
        <div>
          <label for="username">Username: </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <ErrorMessage
          errors={errors}
          field="username"
          errorlevel="warning"
        ></ErrorMessage>
        <div>
          <label for="password1">Password: </label>
          <input
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </div>
        <ErrorMessage
          errors={errors}
          field="password1"
          errorlevel={"warning"}
        ></ErrorMessage>
        <div>
          <label for="password2">Repeat Password: </label>
          <input
            type="password"
            placeholder="Password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </div>
        <ErrorMessage
          errors={errors}
          field="password2"
          errorlevel={"warning"}
        ></ErrorMessage>
        <div>
          <input type="submit" className={styles.submitButton} />
        </div>
        <ErrorMessage
          errors={errors}
          field="non_field_errors"
          errorlevel={"warning"}
        ></ErrorMessage>
      </form>
    </main>
  );
};

export default SignUpForm;
