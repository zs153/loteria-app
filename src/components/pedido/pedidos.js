import { PEDIDOS_POR_PAGINA } from '../../utils/constantes'
import Pedido from './Pedido'

const pedidos = ({ pedidos, page }) => {
  const startIndex = (page - 1) * PEDIDOS_POR_PAGINA
  const selectedPedidos = pedidos.slice(startIndex, startIndex + PEDIDOS_POR_PAGINA)

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Pedidos</h3>
      </div>
      <div className="card-body border-bottom py-3">
        <div className="d-flex">
          <div className="ms-auto text-muted">
            Buscar
            <div className="ms-2 d-inline-block">
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th className="w-1">
                <input type="checkBox" className="form-check-input m-0 align-middle" aria-label="Select all pedidos" />
              </th>
              <th>UserID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Décimos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedPedidos.map(pedido => (
              <Pedido key={pedido[0]} pedido={pedido} />
            ))}
          </tbody>
        </table>
      </div>
    </div>




  )
}

export default pedidos
