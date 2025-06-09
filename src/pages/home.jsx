import { useGetUserQuery } from "../services/auth/auth";

const HomePage = () => {
  const { data } = useGetUserQuery();
  console.log(data);

  return <>HomePage</>;
};
export default HomePage;
