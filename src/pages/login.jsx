import { useForm } from "react-hook-form";
import { useGetUserQuery, useLoginMutation } from "../services/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateIsLogined, updateToken } from "../features/user/user";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const user = await login({ ...data }).unwrap();

      dispatch(updateIsLogined(true));
      dispatch(updateToken(user.accessToken));
      const now = new Date();
      now.setMinutes(now.getMinutes() + 55); // Add 50 minutes
      const expires = now.toUTCString();
      document.cookie = `token=${user.accessToken}; expires=${expires}; path=/; Secure; SameSite=Strict`;

      navigate("/");
    } catch (e) {
      console.log("error password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="userName"
        {...register("username", { required: true })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};
export default LoginPage;
