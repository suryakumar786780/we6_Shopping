import React from 'react'
import ProductDiv from '../../components/product-div/productdiv'

const CartComp = () => {
  return (
    <>
      <div className="inner">
        <ProductDiv leftTitle={'Back'} centerTitle={'Cart Items'} rightTitle={`Showing 1 - ${10} cart products results`} isSelect={true}/>
      </div>
    </>
  )
}

export default CartComp