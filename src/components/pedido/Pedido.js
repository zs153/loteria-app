// import { useEffect, useState } from 'react'
// import './pedido.css'

const Pedido = ({ pedido }) => {

  return (
    <tr>
      <td>
        <input type="checkBox" className="form-check-input m-0 align-middle" aria-label="Select pedido" />
      </td>
      <td>{pedido[5]}</td>
      <td>{pedido[6]}</td>
      <td>{pedido[7]}</td>
      <td>{pedido[3]}</td>
      <td></td>
    </tr>
  )
}

export default Pedido
