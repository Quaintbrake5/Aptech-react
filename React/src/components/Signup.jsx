// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/styles/signup.css";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("you have been sign up succesfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName", { required: "full name is required" })}
        />
        {errors.fullName && <span> {errors.fullName.message}</span>}
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: "Email cannot be empty",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", {
            required: "password cannot be empty",
            minLength: {
              value: 6,
              message: "Password must be minimum of 6 characters",
            },
            maxLength: {
              value: 10,
              message: "It more than 10 character",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};
// eslint-disable-next-line no-irregular-whitespace
export default Signup;