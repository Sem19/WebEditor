import { useForm } from "react-hook-form";
import { useGetUserQuery, useLoginMutation } from "../services/auth/auth";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useGetUserQuery();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const user = await login({ ...data }).unwrap();
      document.cookie = `token=${user.accessToken}JohnDoe; expires=${new Date(
        Date.now() + 58 * 60 * 1000
      )} path=/`;
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
