import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './cartcard.scss'
import RatingComp from '../rating'
import { setCartItemQuantity, setDeleteCartItem } from '../../features/allSlicer';
// import SnackBar from '../snackbar';

const CartComp = ({ data, snack }) => {
  // const [snack, setSnack] = useState(false);
  const dispatch = useDispatch();

  const deleteItem = () => {
    snack(true);
    dispatch(setDeleteCartItem(data))
  }

  const quantity = (check) => {
    dispatch(setCartItemQuantity({
      add: check,
      data
    }))


  }

  return (
    <div className='cart-card'>
      <div className="cart-img" style={{ backgroundColor: `${data.specs.color}` }}>
        <img src={data.product.image} alt={data.product.title} width={150} height={150} />
        <div className="cart-img-price">&#8377;{data.product.price}</div>
      </div>
      <div className="cart-product-details">
        <div className="name margin-cart">
          {data.product.title}
        </div>
        <div className="cart-rating margin-cart">
          Review : &nbsp;<RatingComp rating={data.product.rating.rate} /> &nbsp; {data.product.rating.rate} - ({data.product.rating.count})
        </div>
        <div className="cart-color margin-cart">
          Color : {data.specs.color}
        </div>
        <div className="cart-size margin-cart">
          Size : {data.specs.size}
        </div>
      </div>
      <div className="cart-quantity">
        <div className="total-amt margin-cart">Total Amount - {data.specs.amount}</div>
        <div className="total-quanity margin-cart">Total Quantity </div>
        <div className="count-quantity margin-cart">
          <RemoveCircleOutlineIcon onClick={() => quantity(false)} />  <span>{data.specs.quantity}</span> <AddCircleOutlineIcon onClick={() => quantity(true)} />
        </div>
        <div className="add-cart cursor-pointer" onClick={deleteItem}>Remove from cart</div>
      </div>
    </div >

  )
}

export default CartComp