import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

// icons
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import RatingComp from '../rating';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setAddFavItem, setDeleteFavItem } from '../../features/allSlicer';

import './productcard.scss';

const ProductCard = ({ data, favicon, snack }) => {

  const fav = useSelector(state => state.all.fav);

  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);


  const setFav = (id, check) => {
    setId(id);
    if (favicon && check) {
      dispatch(setAddFavItem(data));
    } else {
      snack(true)
      dispatch(setDeleteFavItem(id));
    }
  }

  useEffect(() => {
    fav.forEach((e) => {
      if (e.id === data.id) {
        setIsFav(true)
      }
    })
  }, [fav])

  const bg_color = ['red', 'green', 'blue', 'orange', 'pink', 'skyblue', 'brown', 'purple', 'teal', 'lavender'];

  return (
    <Card sx={{ padding: '1rem', backgroundColor: 'transparent' }} className='pro-card'>
      <div className='icons'>
        <Link to={`/preview/${data.id}`} className='text-decoration-none'>
          <div className={`roundBorder cursor-pointer zoomicon`}>
            <ZoomOutMapIcon />
          </div>
        </Link>

        {
          favicon ?
            <div className={`fav-div cursor-pointer`}>
              {
                isFav ? <FavoriteIcon style={{ fill: 'red', fontSize: '25px' }} onClick={() => {setFav(data.id, false); setIsFav(false)}} /> : <FavoriteBorderIcon style={{ fill: 'black', fontSize: '25px' }} onClick={() => {setFav(data.id, true); setIsFav(true)}} />
              }
            </ div>
            :
            <div className={`roundBorder cursor-pointer favicon `} onClick={() => setFav(data.id, false)}>
              <DeleteIcon />
            </div>
        }
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

      <Typography className={`card-content card-content-1`}>
        {data.title.length > 40 ? data.title.slice(0, 40) + '...' : data.title}
      </Typography>
      <Typography className={`card-content card-content-2`}>
        &#8377;{data.price}
      </Typography>
      <Typography className='rating'>
        <RatingComp rating={data.rating.rate} />
      </Typography>
    </Card>
  );
}

export default ProductCard