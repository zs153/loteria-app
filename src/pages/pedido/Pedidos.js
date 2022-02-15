import "./pedido.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import PedidosList from "../../components/pedido/PedidosList";

const Pedidos = () => {
  const [filters, setFilters] = useState("");

  return (
    <div className="page">
      <Navbar estado="pedidos" />
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="card">
              <div className="card-header">
                <h1>Pedidos</h1>
                <div className="col-auto ms-auto">
                  <div className="d-flex">
                    <div className="input-icon m-3">
                      <span className="input-icon-addon">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control d-inline-block me-3"
                        placeholder="Buscar nombre..."
                        onChange={(e) => setFilters(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <PedidosList filters={filters} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pedidos;
