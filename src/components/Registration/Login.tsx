import { ChangeEvent, FormEvent, useState } from "react";

import AuthService from "../../services/AuthService";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import styles from "./styles/reg.module.scss";

import { TextField, Button } from "@mui/material";

import { FormProps, ErrorProps } from "../../types/types";

import { authSuccess } from "../../redux/actions/actions";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [form, setForm] = useState<Partial<FormProps>>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorProps>({} as ErrorProps);

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
      const { data } = await AuthService.login({ email, password });
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

  const { email, password } = form;

  return (
    <div className={styles.registration}>
      <img src="/images/linkedin.png" alt="linkedin" />
      <form onSubmit={handleSubmit} className={styles.form}>
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
          disabled={!email || !password}
        >
          Sign Up
        </Button>
      </form>
      <p className={styles.registration__link}>
        Not a member?
        <Link to={"/sign_up"}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
