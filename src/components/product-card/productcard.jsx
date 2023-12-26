import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

// icons
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteIcon from '@mui/icons-material/Delete';

import RatingComp from '../rating';
import { Link } from 'react-router-dom';

import './productcard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../features/allSlicer';

const ProductCard = ({ data, carticon }) => {

  const cart_state = useSelector(state => state.all.cart)
  const theme = useSelector(state => state.all.theme);

  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const setCart = (id) => {
    setId(id);
    if (carticon) {
      dispatch(setCartItems({ data: data, add: true }))
    } else {
      const deleted = cart_state.filter((e) => {
        return e.id !== id;
      })
      dispatch(setCartItems({ data: deleted, add: false }))
      console.log(id, deleted);
    }
  }


  const bg_color = ['red', 'green', 'blue', 'orange', 'pink', 'skyblue', 'brown', 'purple', 'teal', 'lavender'];

  return (
    <Card sx={{ padding: '1rem', backgroundColor: 'transparent' }} className='pro-card'>
      <div className='icons'>
        <Link to={`/preview/${data.id}`} className='text-decoration-none'>
          <div className={`roundBorder ${theme === 'dark' ? 'zoomicon-dark' : 'zoomicon-light'} cursor-pointer`}>
            <ZoomOutMapIcon sx={{color : `${theme === 'dark' ? 'white' : 'black'}`}}/>
          </div>
        </Link>

        <div className={`roundBorder ${theme === 'dark' ? 'bagicon-dark' : 'bagicon-light'} cursor-pointer`} onClick={() => setCart(data.id)}>
          {
            carticon ? <ShoppingBagIcon sx={{color : `${theme === 'dark' ? 'white' : 'black'}`}}/> : <DeleteIcon sx={{color : `${theme === 'dark' ? 'white' : 'black'}`}}/>
          }
        </div>
      </div>

      <CardContent>
        <Box className='bg-product' sx={{ backgroundColor: `${bg_color[Math.floor(Math.random() * 10)]}` }}></Box>
        <Link to={`/preview/${data.id}`} className='text-decoration-none'>
          <Box className='bg-product-inner'>
            <CardMedia
              sx={{ marginTop: '8px', objectFit: 'fill', mixBlendMode: 'multiply', borderRadius: '20px' }}
              component="img"
              height="120"
              image={data.image}
              alt="Paella dish"
              className='img-zoom'
            />
          </Box>
        </Link>
      </CardContent>

      <Typography className={`card-content card-content-1 ${theme === 'dark' ? 'light-font' : 'dark-font'}`}>
        {data.title.length > 30 ? data.title.slice(0, 30) + '...' : data.title}
      </Typography>
      <Typography className={`card-content card-content-2 ${theme === 'dark' ? 'light-font' : 'dark-font'} `}>
        &#8377;{data.price}
      </Typography>
      <Typography className='rating'>
        <RatingComp rating={data.rating.rate} />
      </Typography>
    </Card>
  );
}

export default ProductCard