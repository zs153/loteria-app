import './register.css'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const userid = useRef()
  const nombre = useRef()
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()

    if (password2.current.value !== password.current.value) {
      password2.current.setCustomValidaity("Las contraseñas no coinciden")
    } else {
      const user = {
        userid: userid.current.value,
        nombre: nombre.current.value,
        email: email.current.value,
        password: password.current.value
      }

      try {
        await axios.post('http://localhost:3700/auth/registro', { user })
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className=" border-top-wide border-primary d-flex flex-column">
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="text-center mb-4">
            <Link to='/'>
              <img src="/img/ayuda-logo.png" height="36" alt="Loteria" />
            </Link>
          </div>
          <form className="card card-md" onSubmit={handleClick} autoComplete="off">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registro</h2>
              <div className="mb-2">
                <label className="form-label">UserID</label>
                <input type="text" className="form-control" ref={userid} required />
              </div>
              <div className="mb-2">
                <label className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" ref={nombre} required />
              </div>
              <div className="mb-2">
                <label className="form-label">Correo</label>
                <input type="text" className="form-control" ref={email} required />
              </div>
              <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" ref={password} required minLength="4" />
              </div>
              <div className="mb-2">
                <label className="form-label">Confirmar contraseña</label>
                <input type="password" className="form-control" ref={password2} required minLength="4" />
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100" >
                  Registrarme
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register