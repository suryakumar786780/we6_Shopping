import React, { useState } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setSortingType } from '../features/allSlicer';

const SelectBox = () => {
  
  const [item, setItem] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setItem(event.target.value)
    const type = event.target.value;
    dispatch(setSortingType(type));
  }

  return (
    <Box sx={{ m: 1, width: { lg: '40%', md: '90%' }, marginBottom: { sm: '1rem !important' }, backgroundColor:'white' }} >
      <FormControl size="small" sx={{ width: '100%' }}>
        <Select
          id="demo-simple-select"
          value={item}
          onChange={handleChange}
        >
          <MenuItem value={1}>Defalut Sorting</MenuItem>
          <MenuItem value={2}>Sort by Price</MenuItem>
          <MenuItem value={3}>Sort by Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectBox
