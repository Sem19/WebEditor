import { Outlet } from "react-router";

const PrivateRoute = (props) => {
  return (
    <>
      <Outlet {...props} />
    </>
  );
};
export default PrivateRoute;
