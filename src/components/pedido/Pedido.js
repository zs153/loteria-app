import { useEffect, useState } from 'react'
import './pedido.css'

const Pedido = () => {
  const [pedidos, setPedidos] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    console.log('pedidos')
  }, [])

  return (
    <div className="pedido">
      <input type="text" onChange={e => setText(e.target.value)}/>
    </div>
  )
}

export default Pedido
