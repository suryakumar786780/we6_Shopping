import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Adidas from "../../utils/adidas.png"
import Xbos from "../../utils/xbos.png"
import Nike from "../../utils/nike.png"
import Puma from "../../utils/puma.png"
import Reebok from "../../utils/reebok.png"
import Apple from "../../utils/apple.png"
import Walmart from '../../utils/walmart.png'

import "./partners.scss"

const Partners = () => {


  return (
    <Card sx={{ margin: 'auto', width: '85%', marginTop: '2rem' }} className='card' elevation={10}>
      <CardContent className='partners'>
        <div className='company-count'>
          <div>1800+</div>
          <p>Trusted Partners</p>
        </div>
        <div className="image-gallery">
          <img src={Adidas} alt='adidas' />
          <img src={Xbos} alt='adidas' />
          <img src={Nike} alt='adidas' />
          <img src={Puma} alt='adidas' />
          <img src={Reebok} alt='adidas' />
          <img src={Apple} alt='adidas' />
          <img src={Walmart} alt='adidas' />
        </div>
      </CardContent>
    </Card>
  )
}

export default Partners