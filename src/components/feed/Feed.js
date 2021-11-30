import './feed.css'
import { useContext, useEffect, useState } from "react"
import Pedido from '../../pages/pedido/Pedido'
import axios from 'axios'
import { authContext } from '../../context/AuthContext'

const Feed = () => {
  const [pedidos, setPedidos] = useState([])
  const { user } = useContext(authContext)

  useEffect(() => {
    const fetchPedidos = async () => {
      const res = await axios.get("http://localhost:3700/api/pedidos")

      setPedidos(res.data)
    }

    fetchPedidos()
  }, [username, user.id])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {pedidos.map((p) => (
          <Pedido key={p.id} pedido={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
