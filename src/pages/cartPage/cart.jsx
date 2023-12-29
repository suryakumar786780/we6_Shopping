import React, { useEffect, useState } from 'react'
import ProductDiv from '../../components/product-div/productdiv'
import { Box, Grid } from '@mui/material'
import styled from '@mui/system/styled';

import './cart.scss';

import { useSelector } from 'react-redux';
import CartCard from '../../components/cart-card/cartcard';
import SnackBar from '../../components/snackbar';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));


const CartComp = () => {

  const [snack, setSnack] = useState(false);

  const theme = useSelector(state => state.all.theme);
  const cart = useSelector(state => state.all.cart);
  const sortedCartItem = useSelector(state => state.all.sortingType);

  let totalAmt = 0;
  let totalCount = 0;

  cart.forEach((e) => {
    totalCount += +e.specs.quantity;
    totalAmt += +e.specs.amount;
  })

  useEffect(() => {
  }, [sortedCartItem, cart])

  return (
    <>
      <div className="inner cart-height">
        {
          snack && <SnackBar changesnack={setSnack} message={'Item Removed from Cart Successfully'} color={'warning'} />
        }
        {
          cart.length > 0 ?
            <>
              <ProductDiv cartValues={{ price: `Total Price - ${totalAmt.toFixed(2)}`, quan: `Total Quantity - ${totalCount}` }} centerTitle={'Cart Items'} toButton={'Buy Now'} isSelect={''} />
              <div className="cart-p products">
                <Box sx={{ flexGrow: 1 }} key={0}>
                  <Grid container justifyContent="space-between" gap={0} sx={{ width: '90%', margin: 'auto !important', padding: '1vw 2vw' }}>
                    {
                      cart.length > 0 && cart.map((e, index) => {
                        return <Grid key={index} sx={{ width: '100%', margin: 'auto' }}>
                          <Item className={`card-item ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                            <CartCard data={e} snack={setSnack} />
                          </Item>
                        </Grid>
                      })
                    }
                  </Grid>
                </Box>
              </div>
            </> :
            <div className='empty-div'>
              <div >Your Cart is Empty</div>
            </div>
        }
      </div>
    </>
  )
}

export default CartComp