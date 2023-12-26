import React, { useEffect, useState } from 'react'
import ProductDiv from '../../components/product-div/productdiv'
import { Box, Grid } from '@mui/material'
import styled from '@mui/system/styled';
import ProductCard from '../../components/product-card/productcard';

import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setNavIds } from '../../features/allSlicer';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const CartComp = () => {
  const cart_state = useSelector(state => {
    return {
      theme:state.all.theme,
      cart: state.all.cart,
      sortedCartItem: state.all.sortingType,
    }
  })
  console.log(cart_state);
  const dispatch = useDispatch();
  const cart_arr = cart_state.cart;
  const [sorting, setSorting] = useState([])
  console.log(sorting);
  const getIds = (arr) => {
    const ids = arr.map((e) => {
      return e.id;
    })
    return ids;
  }

  useEffect(() => {
    let array = [...cart_arr];
    if (cart_state.sortedCartItem === 3) {
      array.sort((a, b) => a.rating.rate - b.rating.rate);
      setSorting(array)
    } else if (cart_state.sortedCartItem === 2) {
      array.sort((a, b) => a.price - b.price);
      setSorting(array)
    } else {
      array.sort((a, b) => a.id - b.id);
      setSorting(array)
    }
    const arr = getIds(array);
    dispatch(setNavIds(arr))
  }, [cart_state.sortedCartItem, cart_state.cart])


  return (
    <>
      <div className="inner cart-height">
        <ProductDiv leftTitle={'Back'} centerTitle={'Cart Items'} rightTitle={`Showing 1 - ${10} cart products results`} isSelect={true} />
        <div className="cart-p products"> 
          <Box sx={{ flexGrow: 1, }}>
            <Grid container justifyContent="space-between" gap={5} rowSpacing={5} sx={{ width: '90%', margin: 'auto !important', padding: '1vw 2vw' }}>
              {
                sorting.length > 0 && sorting.map((e) => {
                  return <Grid key={e.id} xs={12} md={5} lg={3} columnGap={3} min-Width={100} sx={{ minWidth: '30%' }}>
                    <Item className={`card-item ${cart_state.theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                      <ProductCard data={e} carticon={false}/>
                    </Item>
                  </Grid>
                })
              }
            </Grid>
          </Box>
        </div>
      </div>
    </>
  )
}

export default CartComp