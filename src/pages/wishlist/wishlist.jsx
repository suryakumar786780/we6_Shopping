import React, { useEffect, useState } from 'react'

import './wishlist.scss'

import { useDispatch, useSelector } from 'react-redux'
import ProductDiv from '../../components/product-div/productdiv'
import ProductCard from '../../components/product-card/productcard'
import { Box, Grid } from '@mui/material'
import SnackBar from '../../components/snackbar'
import { setNavIds } from '../../features/allSlicer'

const Wishlist = () => {

  const dispatch = useDispatch();
  const fav = useSelector(state => state.all.fav);
  const theme = useSelector(state => state.all.theme);
  const [snack, setSnack] = useState(false);

  useEffect(() => {
    let array = [...fav];
    const arr = getIds(array);
    dispatch(setNavIds(arr))
  }, [fav])

  const getIds = (arr) => {
    const ids = arr.map((e) => {
      return e.id;
    })
    return ids;
  }

  return (
    <div className="outer">
      <div className="inner">
        {
          snack && <SnackBar changesnack={setSnack} message={'Item Removed from Wishlist Successfully'} color={'success'} />
        }
        {
          fav.length > 0 ?
            <>
              <ProductDiv leftTitle={'Items'} centerTitle={'Wishlist'} rightTitle={`Showing ${fav.length} favourite items`} isSelect={''} />
              <div className="products">
                <Box sx={{ flexGrow: 1, }}>
                  <Grid container justifyContent="space-between" gap={5} rowSpacing={5} sx={{ width: '90%', margin: 'auto !important', padding: '1vw 2vw' }}>
                    {
                      fav.length > 0 && fav.map((e, index) => {
                        return <Grid key={index} sx={{ minWidth: '30%' }}>
                          <div className={`wish-items card-item ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
                            <ProductCard data={e} favicon={false} snack={setSnack} />
                          </div>
                        </Grid>
                      })
                    }
                  </Grid>
                </Box>
              </div>
            </> : <div className='empty-div'>Your Wishlist is Empty</div>
        }
      </div>
    </div>
  )
}

export default Wishlist