import React, { useEffect, useState } from "react";
import styles from "../auth.module.css";
import ErrorMessage from "../../../components/errormessage/errormessage";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../helpers/currentuser.api";
import { useCurrentUserContext } from "../../../contexts/currentUserContext";


const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;
  const [ userState, setUserState ] = useState(undefined);
  const [errors, setErrors] = useState({});

  const { setCurrentUser } = useCurrentUserContext();
  
  useEffect(()=>{
    if (userState) {
      setCurrentUser(userState);
      navigate("/");
    }
  }, [userState])

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await loginUser(loginData);
      console.log("user successfully logged in?", userResponse);
      setUserState(userResponse.user);
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