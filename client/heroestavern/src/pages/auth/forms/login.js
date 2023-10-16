import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignInForm() {
    const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });
    const { username, password } = signInData;
}

return (
    <form action="POST">
        <input type="text"
        type="text"
        placeholder="username"
        name="username"
        value={username}/>
        <input type="password"
        type="password"
        placeholder="Password"
        name="password"
        value={password}/>
        <input type="submit"/>
    </form>
)