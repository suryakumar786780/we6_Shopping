import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../../features/getitemslicer'
import LoaderComp from '../../components/loader'
import NavComp from '../../components/nav-bar/nav'

import ProductDiv from '../../components/product-div/productdiv'
import ProductCard from '../../components/product-card/productcard'
import { Box, Grid } from '@mui/material'
import styled from '@mui/system/styled';

import './shop.scss';
import { getCatgProducts } from '../../features/getCatgProducts'
import { setNavIds } from '../../features/allSlicer'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const Shop = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => {
    return {
      pro: state.products,
      sortedPro: state.all.sortingType,
      catg: state.all.category,
      catgLoading: state.catgProducts,
    }
  })

  const [sorting, setSorting] = useState([])
  useEffect(() => {
    if (products.catg.length > 0) {
      let res;
      (async () => {
        if (products.catg === 'All') {
          res = await dispatch(getItems());
        } else {
          res = await dispatch(getCatgProducts(products.catg));
        }
        setSorting(res.payload)
        const arr = getIds(res.payload);
        dispatch(setNavIds(arr))
      })()
    }
  }, [products.catg])

  useEffect(() => {
    let array = [...sorting];
    if (products.sortedPro === 3) {
      array.sort((a, b) => a.rating.rate - b.rating.rate);
      setSorting(array)
    } else if (products.sortedPro === 2) {
      array.sort((a, b) => a.price - b.price);
      setSorting(array)
    } else {
      array.sort((a, b) => a.id - b.id);
      setSorting(array)
    }
    const arr = getIds(array);
    dispatch(setNavIds(arr))
  }, [products.sortedPro])


  const getIds = (arr) => {
    const ids = arr.map((e) => {
      return e.id;
    })
    return ids;
  }

  return (
    <>
      <div className="outer">
        <div className="inner">
          <ProductDiv leftTitle={'Product'} centerTitle={'Shop'} rightTitle={`Showing 1 - ${sorting.length} products results`} isSelect={true} />

          {/* products */}
          <div className="products">
            <Box sx={{ flexGrow: 1, }}>
              <Grid container justifyContent="space-between" gap={5} rowSpacing={5} sx={{ width: '90%', margin: 'auto !important', padding: '1vw 2vw' }}>
                {
                  products.pro.loading || products.catgLoading.loading ?
                    <LoaderComp />
                    :
                    <>
                      {
                        sorting.length > 0 && sorting.map((e) => {
                          return <Grid key={e.id} xs={12} md={5} lg={3} columnGap={3} min-Width={100} sx={{ minWidth: '30%', minHeight: '40vh' }}>
                            <Item className='card-item'>
                              <ProductCard id={e.id} img={e.image} title={e.title} price={e.price} rating={e.rating.rate} />
                            </Item>
                          </Grid>
                        })
                      }
                    </>
                }
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop