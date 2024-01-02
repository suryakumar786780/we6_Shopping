import { Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { setCustomerInformation } from '../../../features/allSlicer';

const validationSchema = yup.object({
    paymentMethod: yup.string().required('Payment Method is Required')
})

const Modal_3 = ({ changeModal, setChangeModal }) => {
    const state = useSelector(state => state.all.customerInformation);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            paymentMethod: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(setCustomerInformation({ ...state, ...values }));
            setChangeModal(changeModal + 1);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Payment Method
            </Typography>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="paymentMethod"
                value={formik.values.paymentMethod}
                onChange={formik.handleChange}
                error={formik.touched.paymentMethod && Boolean(formik.errors.paymentMethod)}
            >
                <FormControlLabel value="OP" control={<Radio />} label="Online Payment" />
                <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
                <FormControlLabel value="POD" control={<Radio />} label="POS on Delivery" />
            </RadioGroup>
            <div className='d-flex' style={{ fontSize: "13px", marginLeft: "14px", color: '#D32F2F' }}>{formik.touched.paymentMethod && formik.errors.paymentMethod}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <Button color='success' variant="outlined" onClick={() => setChangeModal(changeModal - 1)}>Previous</Button>
                <Button color='success' variant="outlined" type='submit'>Next</Button>
            </div>
        </form>
    )
}

export default Modal_3