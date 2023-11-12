import React from 'react'
import './Item.css'

const Item = ({ title, description, price, quantity, sku }) => {
  return (
    <div className="card">
      <div className="header">
        <img src="/src/assets/img-example.png" alt="imagen product" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p>{description}.</p>
        <div className='detail-info'>
          <p>Cantidad: {quantity}</p>
          <p className='price'>${price}</p>
        </div>
      </div>
      <div className="footer">
        <p className="tag">SKU: {sku}</p>
        <button type="button" className="action">Comprar</button>
      </div>
    </div>

  )
}

export default Item