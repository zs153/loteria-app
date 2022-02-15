import "./pedido.css";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Detalle from "./Detalle";

const PedidosList = ({ filters }) => {
  const [pedidos, setPedidos] = useState([]);
  const [filteredPedidos, setFilteredPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      const result = await axios.get("http://localhost:8000/api/pedidos");

      setPedidos(result.data.dat);
    };

    getPedidos();
  }, []);

  useEffect(() => {
    if (filters !== "") {
      setFilteredPedidos(
        pedidos.filter((item) =>
          item.NOMCLI.toUpperCase().includes(filters.toUpperCase())
        )
      );
    } else {
      setFilteredPedidos(pedidos);
    }
  }, [pedidos, filters]);

  return (
    <>
      <table className="table table-vcenter card-table">
        <thead>
          <tr>
            <th className="w-60">Nombre</th>
            <th className="w-25">Fecha</th>
            <th>Décimos</th>
            <th className="w-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredPedidos.map((pedido) => (
            <Detalle pedido={pedido} key={pedido.IDPEDI} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PedidosList;
