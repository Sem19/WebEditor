import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = (props) => {
  const { isLogined } = useSelector((state) => state.user);

  if (!isLogined) return <Navigate to="/login" />;
  return (
    <>
      <Outlet {...props} />
    </>
  );
};
export default PrivateRoute;
