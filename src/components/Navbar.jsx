import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function onLogin() {
    navigate("/login");
  }

  function onLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="bg-dark px-2 sticky-top">
      <div className="row text-center">
        <div className="col-lg-2 col-sm-12">
          <Link to="/" className="text-decoration-none">
            <div className="display-6 text-danger py-1">ShowTime</div>
          </Link>
        </div>
        <div className="col-lg-8 col-sm-8 py-2"></div>
        <div className="col-lg-2 p-2 col-sm-4">
          {!localStorage.getItem("token") ? (
            <Button variant="danger" className="px-3" onClick={onLogin}>
              Login / Signup
            </Button>
          ) : (
            <Button variant="danger" className="px-3" onClick={onLogout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
