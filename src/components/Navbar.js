import { Link } from "react-router-dom";
import { BsHouseDoor, BsList } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

const Navbar = ({ estado }) => {
  return (
    <div className="navbar-expand-md">
      <div className="navbar navbar-light">
        <div className="container-xl">
          <ul className="navbar-nav">
            <li
              className={estado === "inicio" ? "nav-item active" : "nav-item"}
            >
              <Link to="/" className="nav-link">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <BsHouseDoor />
                </span>
                <span>Inicio</span>
              </Link>
            </li>
            <li
              className={estado === "pedidos" ? "nav-item active" : "nav-item"}
            >
              <Link to="/pedidos" className="nav-link">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <BsList />
                </span>
                <span>Pedidos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registro" className="nav-link">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <AiOutlineUserAdd />
                </span>
                <span>Registro</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <AiOutlineLogin />
                </span>
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
