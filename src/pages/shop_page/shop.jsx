import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../../features/getitemslicer'
import LoaderComp from '../../components/loader'

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

  const theme = useSelector(state => state.all.theme);
  const pro = useSelector(state => state.products);
  const sortedPro = useSelector(state => state.all.sortingType);
  const catg = useSelector(state => state.all.category);
  const catgLoading = useSelector(state => state.catgProducts);

  const sortArrays = (array) => {
    if (sortedPro === 3) {
      array.sort((a, b) => a.rating.rate - b.rating.rate);
      setSorting(array)
    } else if (sortedPro === 2) {
      array.sort((a, b) => a.price - b.price);
      setSorting(array)
    } else {
      array.sort((a, b) => a.id - b.id);
      setSorting(array)
    }
  }
  const [sorting, setSorting] = useState([])

  useEffect(() => {
    if (catg.length > 0) {
      let res;
      (async () => {
        if (catg === 'All') {
          res = await dispatch(getItems());
        } else {
          res = await dispatch(getCatgProducts(catg));
        }
        let array;
        if (res.payload && res.payload.length > 0) {
          array = [...res.payload]
        }
        sortArrays(array)
        setSorting(array)
        const arr = getIds(array);
        dispatch(setNavIds(arr))
      })()
    }
  }, [catg])

  useEffect(() => {
    let array = [...sorting];
    sortArrays(array)
    const arr = getIds(array);
    dispatch(setNavIds(arr))
  }, [sortedPro])


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
                  pro.loading || catgLoading.loading ?
                    <LoaderComp />
                    :
                    <>
                      {
                        sorting.length > 0 && sorting.map((e) => {
                          return <Grid key={e.id} sx={{ minWidth: '30%' }}>
                            <Item className={`card-item ${theme === 'dark' ? 'dark-card' : 'light-card'}`} xs={12} md={5} lg={3} columnGap={3} min-width={100}>
                              <ProductCard data={e} favicon={true} />
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