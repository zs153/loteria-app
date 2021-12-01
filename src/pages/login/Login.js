// import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCall'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

import React from 'react'

const Login = () => {
  const userid = useRef()
  const password = useRef()
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall(
      { userid: userid.current.value, password: password.current.value },
      dispatch
    )
  }

  return (
    <div className=" border-top-wide border-primary d-flex flex-column">
      <div className="page page-center">
        <div className="container-tight py-6">
          <div className="text-center mb-4">
            <Link to="/"><img src="/img/ayuda-logo.png" height="36" alt="" /></Link>
          </div>
          <form className="card card-md" onSubmit={handleClick} autoComplete="off">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Iniciar sesión</h2>
              <div className="mb-2">
                <label className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" ref={userid} required />
              </div>
              <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" ref={password} required minLength="6" />
              </div>
              <div className="mb-1">
                <span className="form-label">
                  <Link to="/log/forgot">He olvidado mi contraseña</Link>
                </span>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100" disabled={isFetching}>
                  {isFetching ? (
                    "..."
                  ) : (
                    "Indentificarme"
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="text-center text-muted mt-3">
            ¿Ya tienes cuenta?
            <Link to="/auth"></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
