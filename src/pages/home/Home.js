import './home.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [userid, setUserid] = useState('');
  const [decimos, setDecimos] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    // todo
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-sm">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <div className="card">
                  <form onSubmit={handleSubmit} >
                    <div className="card-header">
                      Pedido
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <div className="mb-3">
                            <label className="form-label">UserID</label>
                            <input type="text" name="userid" className="form-control" value={userid} onChange={(e) => setUserid(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <div className="mb-3">
                            <label className="form-label">Nº Décimos</label>
                            <input type="text" name="decimos" className="form-control" value={decimos} onChange={(e) => setDecimos(e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-end">
                      <div className="d-flex">
                        <Link to="/" className="btn btn-link">Cancelar</Link>
                        <button type="submit" className="btn btn-primary ms-auto">Enviar pedido</button>
                      </div>
                    </div>
                  </form>
                </div>
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
