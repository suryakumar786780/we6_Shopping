import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { setCustomerInformation } from '../../../features/allSlicer';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = yup.object({
    name: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is Required!'),
    mobNum: yup.string()
        .min(10, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Mobile Number is Required!'),
    email: yup
        .string('Enter your email')
        .min(8, "Enter your email")
        .required('Email is required'),
    // .matches(/^[a-z0-9]{4,}@g(oogle)?mail\.com$/, "Enter a valid Email ID"),
    city: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('City is Required!'),
    state: yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('State is Required!'),
    zip: yup.string()
        .min(6, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Zip Code is Required!'),
    district: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('District is Required!'),
    address: yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Address is Required!'),
});

const Modal_1 = ({ changeModal, setChangeModal }) => {

    const state = useSelector(state => state.all.customerInformation);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            mobNum: '',
            email: '',
            city: '',
            state: '',
            zip: '',
            district: '',
            address: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(setCustomerInformation(values));
            setChangeModal(changeModal + 1);
        }
    })

    useEffect(() => {
        const editData = state;
        formik.resetForm({
            values: {
                name: editData.name,
                mobNum: editData.mobNum,
                email: editData.email,
                city: editData.city,
                state: editData.state,
                zip: editData.zip,
                district: editData.district,
                address: editData.address,
            }
        });
    }, [])

    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
                Delivery Information
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, }}>
                <div className='row-1'>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="name"
                            name="name"
                            // label="Enter Your Name"
                            size='small'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Mobile Number</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="mobNum"
                            name="mobNum"
                            // label="Enter Your Mobile Number"
                            size='small'
                            value={formik.values.mobNum}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.mobNum && Boolean(formik.errors.mobNum)}
                            helperText={formik.touched.mobNum && formik.errors.mobNum}
                        />
                    </div>
                </div>
                <div className='row-1'>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="email"
                            name="email"
                            // label="Enter Your Email"
                            size='small'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </div>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>City</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="city"
                            name="city"
                            // label="Enter Your City"
                            size='small'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </div>
                </div>
                <div className='row-1'>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>State</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="state"
                            name="state"
                            // label="Enter Your State"
                            size='small'
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                        />
                    </div>
                    <div style={{ width: '22%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Zip</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="zip"
                            name="zip"
                            // label="Enter Your Zip"
                            size='small'
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />
                    </div>
                    <div style={{ width: '22%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>District</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="name"
                            name="district"
                            // label="Enter Your District"
                            size='small'
                            value={formik.values.district}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.district && Boolean(formik.errors.district)}
                            helperText={formik.touched.district && formik.errors.district}
                        />
                    </div>
                </div>
                <div className='row-1'>
                    <div style={{ width: '48%' }}>
                        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>Address</div>
                        <TextField
                            sx={{ width: "100%" }}
                            id="address"
                            name="address"
                            // label="Enter Your Address"
                            size='small'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </div>
                </div>
                <div style={{ textAlign: 'end', marginTop: '2rem' }}>
                    <Button type='submit' color='success' variant="outlined"
                        disabled={!formik.isValid}
                    >Next</Button>
                </div>
            </Typography>
        </form>
    )
}

export default Modal_1