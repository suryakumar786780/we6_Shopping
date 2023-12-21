import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

// icons
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import RatingComp from '../rating';
import { Link } from 'react-router-dom';

import './productcard.scss';

const ProductCard = ({ id, img, title, price, rating }) => {

  const bg_color = ['red', 'green', 'blue', 'orange', 'pink', 'skyblue', 'brown', 'purple', 'teal', 'lavender'];

  return (
    <Card sx={{ padding: '1rem', backgroundColor: 'transparent' }} className='pro-card'>
      <div className='icons'>
        <Link to={`/preview/${id}`} className='text-decoration-none'>
          <div className="roundBorder zoomicon cursor-pointer">
            <ZoomOutMapIcon />
          </div></Link>
        <div className="roundBorder bagicon cursor-pointer">
          <ShoppingBagIcon />
        </div>
      </div>

      <CardContent>
        <Box className='bg-product' sx={{ backgroundColor: `${bg_color[Math.floor(Math.random() * 10)]}` }}></Box>
        <Link to={`/preview/${id}`} className='text-decoration-none'>
          <Box className='bg-product-inner'>
            <CardMedia
              sx={{ marginTop: '8px', objectFit: 'fill', mixBlendMode:'multiply',borderRadius:'20px' }}
              component="img"
              height="120"
              image={img}
              alt="Paella dish"
              className='img-zoom'
            />
          </Box>
        </Link>
      </CardContent>

      <Typography className='card-content card-content-1'>
        {title.length > 30 ? title.slice(0, 30) + '...' : title}
      </Typography>
      <Typography className='card-content card-content-2'>
        &#8377;{price}
      </Typography>
      <Typography className='rating'>
        <RatingComp rating={rating} />
      </Typography>
    </Card>
  );
}

export default ProductCard