import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DateComp from './datecomp'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
]

const MultipleDate = () => {

  const [value, setValue] = useState();
  const [dateArr, setDateArr] = useState([]);
  // const dateArr = [];


  useEffect(() => {
    if (value) {
      let date = value.$D;
      let month = value.$M;
      let year = value.$y;
      setDateArr([...dateArr, date + '-' + (month + 1) + '-' + year]);
    }
  }, [value])
  console.log(dateArr);

  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        size='small'
        options={dateArr}
        // getOptionLabel={(option) => option}
        //  defaultValue={[top100Films[4]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Schedule Dates"
          />
        )}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DemoContainer components={['DatePicker']} > */}
        <div>
          <DatePicker onChange={(newValue) => setValue(newValue)} />
        </div>
        {/* </DemoContainer> */}
      </LocalizationProvider>

    </Stack>
  );
}
export default MultipleDate

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
