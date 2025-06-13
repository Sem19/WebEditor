import { useForm } from "react-hook-form";
import { useLoginMutation } from "../services/auth/auth";
import { useDispatch } from "react-redux";
import { updateIsLogined, updateToken } from "../features/user/user";
import { useNavigate } from "react-router";
import { setExpToken } from "../utils/cookies/getTokenFromCookies";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading, error, reset: resetLoginMutation }] =
    useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const user = await login(data).unwrap();
      dispatch(updateIsLogined(true));
      dispatch(updateToken(user.accessToken));
      setExpToken(user.accessToken);
      navigate("/");
    } catch (e) {
      reset();
    }
  };

  const handleErrorReset = () => {
    if (error) resetLoginMutation();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="userName"
        {...register("username", {
          required: { value: true, message: "Please fill the username" },
          onChange: handleErrorReset,
        })}
      />
      {errors?.username && (
        <p style={{ color: "red" }}>{errors?.username?.message}</p>
      )}
      <input
        type="password"
        placeholder="password"
        {...register("password", {
          required: { value: true, message: "Please fill the password" },
          onChange: handleErrorReset,
        })}
      />
      {errors?.password && (
        <p style={{ color: "red" }}>{errors?.password?.message}</p>
      )}
      {error && <div style={{ color: "red" }}>invalid credential</div>}
      <input type="submit" disabled={isLoading} />
    </form>
  );
};
export default LoginPage;
