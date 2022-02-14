import "./registro.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Registro = () => {
  const navigate = useNavigate();

  const initValues = { userid: "", nombre: "", email: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errores = validate(formValues);
    setFormErrors(errores);

    if (Object.keys(errores).length === 0) {
      const { userid, nombre, email } = formValues;

      const user = {
        userid: userid,
        nombre: nombre,
        email: email,
      };

      try {
        const res = await axios.post("http://localhost:8000/api/registro", {
          user,
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.userid) {
      errors.userid = "UserID es obligatorio!";
    } else if (values.userid.length < 4) {
      errors.userid = "UserID mínimo de 4 caracteres!";
    } else if (values.userid.length > 20) {
      errors.userid = "UserID máximo de 20 caracteres!";
    }
    if (!values.nombre) {
      errors.nombre = "Nombre es obligatorio!";
    }
    if (!values.email) {
      errors.email = "Correo es obligatorio!";
    } else if (!regex.test(values.email)) {
      errors.email = "El formato del correo no es válido!";
    }

    return errors;
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
            <h2 className="card-title text-center mb-2">
              Registro nuevo usuario
            </h2>
            <div className="mb-05">
              <label htmlFor="userid" className="form-label">
                UserID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
                name="userid"
                value={formValues.userid}
                onChange={handleChange}
              />
            </div>
            <p className="text-error">{formErrors.userid}</p>
            <div className="mb-05">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
              />
            </div>
            <p className="text-error">{formErrors.nombre}</p>
            <div className="mb-05">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="correo electrónico"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="text-error">{formErrors.email}</p>
            <button type="submit" className="btn btn-primary w-100">
              Registrar usuario
            </button>
          </div>
        </form>
        <div className="text-center text-muted mt-1">
          ¿Estas registrado?
          <a href="/login" className="ml-05">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registro;
