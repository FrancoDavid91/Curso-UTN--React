import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ sku, imagen, titulo, descripcion, precio, cantidad }) => {

  const [added, setAdded] = useState(false)


  const clickAgregar = () => {
    setAdded(true)
  }
  const clickQuitar = () => {
    setAdded(false)
  }

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">${precio}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <>
            <button
              type="button"
              className="boton-agregar"
              onClick={clickAgregar}
            >
              Agregar Carrito
            </button>
           
            <Link to={`/details/${sku}`}>
              <button type="button" className="boton-detalle">
                Detalles
              </button>
            </Link>
          </>
        )}

      </div>
    </div>
  )

}
export default ProductCard