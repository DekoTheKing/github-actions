import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
    <div className="log-form">
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register("email"
          , {
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors && errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register("password", { required: "Enter your password" })}
        />
        {errors && errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
        <end> </end>
        <button type="submit">Sign in</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
