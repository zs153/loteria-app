import './pedido.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../footer/Footer'

const Pedido = () => {
  const navigate = useNavigate()

  const initValues = { userid: '', nombre: '', email: '', decimos: '1' }
  const [formValues, setFormValues] = useState(initValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errores = validate(formValues)
    setFormErrors(errores)

    if (Object.keys(errores).length === 0) {
      const { userid, nombre, email, decimos } = formValues

      const pedido = {
        userid: userid.toLocaleLowerCase(),
        nombre: nombre.toLocaleUpperCase(),
        email: email,
        esAdmin: 0,
        decimos: decimos,
      }

      try {
        const res = await axios.post('http://localhost:8000/api/pedidos', {
          pedido,
        })

        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.userid) {
      errors.userid = 'UserID es obligatorio!'
    } else if (values.userid.length < 4) {
      errors.userid = 'UserID mínimo de 4 caracteres!'
    } else if (values.userid.length > 20) {
      errors.userid = 'UserID máximo de 20 caracteres!'
    }
    if (!values.nombre) {
      errors.nombre = 'Nombre es obligatorio!'
    }
    if (!values.email) {
      errors.email = 'Correo es obligatorio!'
    } else if (!regex.test(values.email)) {
      errors.email = 'El formato del correo no es válido!'
    }

    return errors
  }

  return (
    <form className='card card-md' onSubmit={handleSubmit}>
      <div className='card-body'>
        <h2 className='card-title text-center mb-2'>Formulario de pedido</h2>
        <div className='mb-05'>
          <label htmlFor='userid' className='form-label'>
            UserID
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='userID'
            name='userid'
            value={formValues.userid}
            onChange={handleChange}
          />
        </div>
        <p className='text-error'>{formErrors.userid}</p>
        <div className='mb-05'>
          <label htmlFor='nombre' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='nombre'
            name='nombre'
            value={formValues.nombre}
            onChange={handleChange}
          />
        </div>
        <p className='text-error'>{formErrors.nombre}</p>
        <div className='mb-05'>
          <label htmlFor='email' className='form-label'>
            Correo
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='correo electrónico'
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p className='text-error'>{formErrors.decimos}</p>
        <div className='mb-05'>
          <label htmlFor='decimos' className='form-label'>
            Décimos
          </label>
          <input
            type='number'
            className='form-control'
            placeholder='correo electrónico'
            name='decimos'
            value={formValues.decimos}
            onChange={handleChange}
            min='1'
          />
        </div>
        <p className='text-error'>{formErrors.email}</p>
        <button type='submit' className='btn btn-primary w-100'>
          Enviar pedido
        </button>
      </div>
    </form>
  )
}

export default Pedido
