import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        userid,
        password,
      });

      setUser(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page page-center">
      <div className="container-tight py-4">
        <div className="text-center mb-2">
          <Link to="/">
            <img src="/img/ayuda-logo.png" height="36" alt="Loteria" />
          </Link>
        </div>

        <form className="card card-md" onSubmit={handleSubmit}>
          <div className="card-body">
            <h2 className="card-title text-center mb-2">Iniciar sesión</h2>
            <div className="mb-05">
              <label htmlFor="userid" className="form-label">
                UserID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
                name="userid"
                onChange={(e) => setUserid(e.target.value)}
              />
            </div>
            <div className="mb-05">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Identificarme
            </button>
          </div>
        </form>
        <div className="text-center text-muted mt-1">
          <a href="/forgot" className="ml-05">
            He olvidado mi contraseña
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
