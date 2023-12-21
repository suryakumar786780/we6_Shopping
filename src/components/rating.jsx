import React from 'react'
import Rating from '@mui/material/Rating';
const RatingComp = ({rating}) => {
    return (
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly size='small'/>
    )
}

export default RatingComp