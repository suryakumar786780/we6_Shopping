import React, { useEffect, useState } from 'react'
import ListItemComp from '../listitem'
import SelectBox from '../selectbox'

import './productdiv.scss'
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const ProductDiv = ({ leftTitle, centerTitle, rightTitle, isSelect }) => {

  const navIds = useSelector(state =>  state.all.navIds)

  const {id} = useParams();
  let posI = 0;
  navIds.forEach((e, index) => {
    if(+id === e) {
      posI = index
    };
  })
  const navigate = useNavigate();
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
    } else if(change === navIds.length - 1 && pos === 1){
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
  if(posI === 0 ){
    setDis({ p: true, n: false })
  } else if(posI === navIds.length - 1){
    setDis({ p: false, n: true })
  }
}, [posI])

  return (
    <div className='fixed-div'>
      <div className="inner-fixed-div">
        <ul>
          <div className="proshop">
            {
              leftTitle === 'Back' ? <div className="back">
                <Link to={'/shop'} className='text-decoration-none'>
                  <Button variant="outlined" className='back-btn'>{leftTitle}</Button>
                </Link>
              </div> : <ListItemComp value={leftTitle} />
            }

            <ListItemComp classname={'shop'} value={centerTitle} />
          </div>
          <div className='select-div'>
            <ListItemComp value={rightTitle} classname='mr-10'>  </ListItemComp>
            {isSelect ? <SelectBox /> :
              <div className='east-west'>
                <Button variant="outlined" disabled={dis.p} className={`${dis.p && 'disabled'}`} onClick={() => previewChange(0)}>Previous</Button>
                <Button variant="outlined" disabled={dis.n} className={`${dis.n && 'disabled'}`} onClick={() => previewChange(1)}>Next</Button>
              </div>
            }
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ProductDiv