export const estadosLoteria = {
  cerrado: 0,
  abierto: 1
}
export const estadosAviso = {
  sinAviso: 0,
  apertura: 1,
  cierre: 2
}
export const tiposMovimiento = {
  crearPedido: 0,
  modificarPedido: 1,
  borrarPedido: 2,
  crearCliente: 3,
  modificarCliente: 4,
  borrarCliente: 5,
  crearCobro: 6,
  modificarCobro: 7,
  borrarCobro: 8
}

/* arrays */
export const arrEstadosLoteria = [
  { id: 0, des: 'CERRADO' },
  { id: 1, des: 'ABIERTO' }
]
export const arrEstadosAviso = [
  { id: 0, des: 'SIN AVISO' },
  { id: 1, des: 'APERTURA' },
  { id: 2, des: 'CIERRE' }
]