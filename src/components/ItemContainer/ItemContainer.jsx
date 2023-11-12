import React from 'react'
import Item from '../Item/Item'

const ItemContainer = () => {

  let loremDescription ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae quae hic enim voluptatum inventore? Architecto officia ad aliquid vel tempore beatae eos, pariatur modi nobis iure repellendus aperiam in."
  
  return (
    <>
      <Item 
        title={"Caja Misteriosa"}
        description={loremDescription}
        price={100.00}
        quantity={3}
        sku={"SKU-123"}
      />
    </>
  )
}

export default ItemContainer