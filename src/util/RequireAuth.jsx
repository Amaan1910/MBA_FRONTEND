import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  if (
    !allowedRoles.includes(localStorage.getItem("userTypes")?.toLowerCase())
  ) {
    return <Navigate to="/unauthorised" />;
  }

  return <Outlet />;
};

export default RequireAuth;
