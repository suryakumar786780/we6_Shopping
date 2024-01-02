import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomerInformation } from '../../../features/allSlicer'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const validationSchema = yup.object({
    note: yup.string()
        .min(7, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Note is Required!'),
})

const Modal_2 = ({ changeModal, setChangeModal }) => {

    const [value, setValue] = useState();
    const [err, setErr] = useState(false);
    let date, month, year;
    if (value) {
        date = value.$D;
        month = value.$M + 1;
        year = value.$y;
    }
    let dateStr = `${date}/${month}/${year}`;

    const state = useSelector(state => state.all.customerInformation);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            note: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (value) {
                dispatch(setCustomerInformation({ ...state, date: dateStr, note: values.note }));
                setChangeModal(changeModal + 1);
            }
        }
    })

    useEffect(() => {
        if (value) setErr(false)
        else setErr(true)
    }, [value])
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Schedule Delivery
            </Typography>
            <div>
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Date</div>
                    <div className='datepicker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(newValue) => setValue(newValue)} />
                        </LocalizationProvider>
                        <div className='helperText'>{err ? 'Date is Required!' : ''}</div>
                    </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Note</div>
                    <TextField
                        sx={{ width: "100%" }}
                        id="note"
                        name="note"
                        size='small'
                        value={formik.values.note}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.note && Boolean(formik.errors.note)}
                        helperText={formik.touched.note && formik.errors.note}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal - 1)}>Previous</Button>
                <Button color='success' variant="outlined" type='submit' disabled={err}>Next</Button>
            </div>
        </form>
    )
}

export default Modal_2