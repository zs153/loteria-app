import { useEffect, useState } from 'react'
import './pedido.css'

const Pedido = ({ pedido }) => {

  return (
    <div className="card">
      <div className="card-body card-body-scrollable">
        <div className="divide-y">
          <div>
            <div className="row">
              <div className="col-auto">
                <div className="col">
                  <div className="col-auto align-self-center">
                    <span className="avatar">{pedido[5]}</span>
                  </div>
                  <div className="text-trucate">En un lugar de la Mancha...</div>
                  <div className="text-muted">Ayer</div>
                </div>
                <div className="col-auto align-self-center">
                  <div className="badge bg-success me-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pedido
