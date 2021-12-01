import './home.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Pedidos from '../../components/pedido/pedidos'
import Pagination from '../../components/pedido/Pagination'
import { PEDIDOS_POR_PAGINA } from '../../utils/constantes'

const Home = () => {
  const [pedidos, setPedidos] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    async function getPedidos() {
      try {
        const result = await fetch('http://localhost:3700/api/pedidos')
        const data = await result.json()

        setPedidos(data.dat)
        setTotalPages(Math.ceil(data.dat.length / PEDIDOS_POR_PAGINA))
      } catch (err) {
        console.log(err)
      }
    }

    getPedidos()
  }, [])

  const handleClick = num => {
    setPage(num)
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <Topbar />
                <Pedidos pedidos={pedidos} page={page} />
                <Pagination totalPages={totalPages} handleClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-transparent d-print-none">
        <div className="container">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              Copyright &copy; 2021
              <Link to="/" className="link-secondary">SIAC</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
