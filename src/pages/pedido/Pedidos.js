import "./pedido.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      const result = await axios("http://localhost:8000/api/pedidos");
      setPedidos(result.data.dat);
    };
    getPedidos();

    pedidos.map((pedido) => {
      console.log(pedido);
    });
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="card">
              <table className="table table-vcenter card-table">
                <thead>
                  <tr>
                    <th className="w-75">Nombre</th>
                    <th>Décimos</th>
                    <th className="w-1"></th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.map((pedido) => {
                    <tr>
                      <td>
                        <div className="d-flex py-1 align-items-center">
                          <div className="flex-fill">
                            <div className="font-weight-medium">
                              <span>{pedido.nomcli}</span>
                            </div>
                            <div className="text-muted">
                              <a href="/">email@correo.com</a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex py-1 align-items-center">
                          <div className="flex-fill">
                            <div className="font-weight-medium">
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <ul className="dots-menu">
                          <li className="nav-item drop-right">
                            <a href="/" className="nav-link">
                              <i className="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul>
                              <li className="nav-item">
                                <a href="/" className="nav-link">
                                  <i className="bi bi-pencil dropdown-item-icon"></i>
                                  Editar
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="/" className="nav-link">
                                  <i className="bi bi-trash dropdown-item-icon"></i>
                                  Borrar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pedidos;
