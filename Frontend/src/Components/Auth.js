import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

export function Auth() {

    ////////////////////////////// AUTHENTICATION 2 START ///////////////////////////////

    const [openLoginForm, setLoginFormOpen] = React.useState(false);

    const handleClickLoginFormOpen = () => {
        setLoginFormOpen(true);
    };

    const handleClickLoginFormClose = () => {
        setError();
        setLoginFormOpen(false);
    };

    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState();
    const [error, setError] = useState();
    
    const login = (user) => {
        axios.post('http://localhost:3001/login/', {
            "user": user.username,
            "pass": user.password,
        }).then(response => {
            if (response.data.length > 0) {
                handleClickLoginFormClose()
                setAuth(true);
                setUser([user.username, user.password]);
                localStorage.setItem("auth", Boolean(true));
                localStorage.setItem("user", user.username);
                localStorage.setItem("pass", user.password);
                window.location.reload();
            }
            else { setError('Invalid username or password !') }
        })
    };

    const handleClickLogout = () => {
        setError();
        setAuth(false);
        setUser();
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
        window.location.reload();
    };

    useEffect(() => {
        if (Boolean(localStorage.getItem("auth")) === true) {
            setAuth(true);
            setUser([localStorage.getItem("user"), localStorage.getItem("pass")]);
        }
    }, [auth]);

    ////////////////////////////// AUTHENTICATION 2 END ///////////////////////////////

    return { 
        auth, setAuth, user, setUser, error, openLoginForm, handleClickLoginFormOpen, handleClickLoginFormClose, handleClickLogout, login 
    }
};

export default Auth;