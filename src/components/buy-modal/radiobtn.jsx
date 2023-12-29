import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const RadioBtn = ({label, value}) => {
  return (
    <FormControlLabel value={value} control={<Radio />} label={label} />
  )
}

export default RadioBtn