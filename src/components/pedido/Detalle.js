const Detalle = ({ pedido }) => {
  return (
    <tr key={pedido.IDPEDI}>
      <td>
        <div className="d-flex py-1 align-items-center">
          <div className="flex-fill">
            <div className="font-weight-medium">
              <span>{pedido.NOMCLI}</span>
            </div>
            <div className="text-muted">
              <a href="/">{pedido.EMACLI}</a>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex py-1 align-items-center">
          <div className="flex-fill">
            <div className="font-weight-medium">
              <span>{pedido.FECPED}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex py-1 align-items-center">
          <div className="flex-fill">
            <div className="font-weight-medium">
              <span>{pedido.CANPED}</span>
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
                <a href={`/pedidos/${pedido.IDPEDI}`} className="nav-link">
                  <i className="bi bi-pencil dropdown-item-icon"></i>
                  Editar pedido
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="bi bi-trash dropdown-item-icon"></i>
                  Borrar pedido
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default Detalle;
