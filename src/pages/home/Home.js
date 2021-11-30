import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Pedido from '../../components/pedido/Pedido';

const Home = () => {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function getPedidos() {
      try {
        const result = await fetch('http://localhost:3700/api/pedidos')
        const data = await result.json()

        setPedidos(data.dat)

      } catch (err) {
        console.log(err)
      }
    }

    getPedidos()
  }, [])

  return (
    <>
      <Topbar />
      {pedidos.map((pedido, index) => (
        <Pedido key={pedido[0]} pedido={pedido} />
      ))}

      {/* <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-vcenter card-table table-striped">
                      <thead>
                        <tr>
                          <th>userID</th>
                          <th>Nombre</th>
                          <th>Correo</th>
                          <th>Décimos</th>
                          <th>Cambio</th>
                          <th className="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {pedidos.map((item, index) => (
                          <tr key={index}>
                            <td>{item[5]}</td>
                            <td>{item[6]}</td>
                            <td>{item[7]}</td>
                            <td>{item[3]}</td>
                            <td>{<Link to="#">Editar</Link>}</td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
