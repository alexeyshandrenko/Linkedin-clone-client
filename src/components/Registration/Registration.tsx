import { ChangeEvent, FormEvent, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authSuccess } from "../../redux/actions/actions";

import styles from "./styles/reg.module.scss";

import { TextField, Button } from "@mui/material";

import { FormProps, ErrorProps } from "../../types/types";

import AuthService from "../../services/AuthService";
import { AxiosError } from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<FormProps>({
    username: "",
    profilePicture: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorProps>({} as ErrorProps);

  const { username, profilePicture, email, password } = form;

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({} as ErrorProps);
    try {
      const { data } = await AuthService.registration(form);
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch(authSuccess(data));
      }
      navigate("/app");
    } catch (e: any) {
      // const err = e as AxiosError;
      setError(e.response?.data);
    }
  };

  return (
    <div className={styles.registration}>
      <img src="/images/linkedin.png" alt="linkedin" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label="Username"
          name="username"
          variant="standard"
          size="small"
          type="text"
          required
          value={username}
          onChange={changeForm}
          className={styles.form__input}
        />
        <TextField
          label="Profile pic URL (optional)"
          name="profilePicture"
          variant="standard"
          size="small"
          type="text"
          value={profilePicture}
          onChange={changeForm}
          className={styles.form__input}
        />
        <TextField
          label="Email"
          name="email"
          variant="standard"
          size="small"
          type="email"
          required
          value={email}
          onChange={changeForm}
          className={styles.form__input}
        />
        <TextField
          label="Password"
          name="password"
          variant="standard"
          size="small"
          type="password"
          required
          value={password}
          onChange={changeForm}
          className={styles.form__input}
        />
        <p className={styles.error}>{error && error?.message}</p>
        <Button
          className={styles.form__button}
          variant="contained"
          type="submit"
          disabled={!username || !email || !password}
        >
          Sign Up
        </Button>
      </form>
      <p className={styles.registration__link}>
        Do you have an account?
        <Link to={"/login"}>Sign in</Link>
      </p>
    </div>
  );
};

export default Registration;
