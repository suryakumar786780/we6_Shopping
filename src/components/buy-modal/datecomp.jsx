import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function DateComp() {
    const [value, setValue] = React.useState();
    // const dateArr = [];
    // let date = value.$D, month = value.$M, year = value.$y;

    // console.log(date, month+1, year);
    return (
        <div className='datepicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider>
        </div>
    );


}