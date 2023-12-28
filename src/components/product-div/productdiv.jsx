import React, { useEffect, useState } from 'react'
import ListItemComp from '../listitem'
import SelectBox from '../selectbox'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import './productdiv.scss'
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const ProductDiv = ({ nav, leftTitle, centerTitle, rightTitle, isSelect, toButton, cartValues }) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const navIds = useSelector(state => state.all.navIds)
  const theme = useSelector(state => state.all.theme);

  let posI = 0;
  navIds.forEach((e, index) => {
    if (+id === e) {
      posI = index
    };
  })

  const [dis, setDis] = useState({
    p: false,
    n: false
  })

  const previewChange = (pos) => {
    let change = posI;
    let nav;
    if (change === 0 && pos === 0) {
      setDis({ p: true, n: false })
      nav = false;
    } else if (change === navIds.length - 1 && pos === 1) {
      setDis({ p: false, n: true })
      nav = false;
    } else {
      setDis({ p: false, n: false })
      pos === 0 ? change-- : change++;
      nav = true;
    }
    nav && navigate(`/preview/${navIds[change]}`, { replace: true });
  }

  useEffect(() => {
    if (posI === 0) {
      setDis({ p: true, n: false })
    } else if (posI === navIds.length - 1) {
      setDis({ p: false, n: true })
    }
  }, [posI])

  return (
    <div className={`fixed-div ${theme === 'dark' ? 'fixed-dark' : 'fixed-light'}`}>
      <div className="inner-fixed-div">
        <ul>
          <div className="proshop">
            {
              leftTitle === 'Back' ? <div className="back">
                <Link to={nav} className='text-decoration-none'>
                  <Button variant="outlined" className={` ${theme === 'dark' ? 'dark-btn' : 'light-btn'}`}>{leftTitle}</Button>
                </Link>
              </div> : cartValues ? <div className=''>
                <ListItemComp value={cartValues.quan} classname='mr-10' />
                <ListItemComp value={cartValues.price} classname='mr-10' />
              </div> : <ListItemComp value={leftTitle} />
            }
            <ListItemComp classname={'shop'} value={centerTitle} />
          </div>
          <div className={`select-div ${toButton ? 'buy' : 'select'}`}>
            <ListItemComp value={rightTitle} classname='mr-10' />
            {isSelect ? <SelectBox /> : isSelect === false ?
              <div className='east-west'>
                <Button variant="outlined" disabled={dis.p} className={`${dis.p && 'disabled'} ${theme === 'dark' ? 'dark-btn' : 'light-btn'}`} onClick={() => previewChange(0)}>Previous</Button>
                <Button variant="outlined" disabled={dis.n} className={`${dis.n && 'disabled'} ${theme === 'dark' ? 'dark-btn' : 'light-btn'}`} onClick={() => previewChange(1)}>Next</Button>
              </div> : toButton ? <Button variant="contained" style={{ backgroundColor: 'gold', color: 'black', fontWeight: 'bold' }} className='buy-btn'>{toButton} &nbsp; <ShoppingBasketIcon /></Button> : ''
            }
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ProductDiv