import React, { useState } from 'react'

import SignupImg from '../../utils/signup.png'

import { signUpUser } from '../../features/userAuth'

import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from '../../components/signUpForm';
import { setCustomerInformation } from '../../features/allSlicer'

import "../login/login.scss"

const SignUp = () => {
    const state = useSelector(state => state.all.customerInformation)
    console.log('state --->>>>: ', state);
    const dispatch = useDispatch()

    const [saveData, setSaveData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const storeSignUpData = (key, value) => {
        setSaveData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const signup = async () => {
        let res = await dispatch(signUpUser(saveData));
        if (res?.payload?.data?.status === 'success') {
            setResponse(res.payload.data.data);
            dispatch(setCustomerInformation({ 
                name: res.payload.data.data.name,
                email: res.payload.data.data
            }));
        } else {
            setError(res.payload.response.data);
        }
    }

    return (
        <div className="main_container">
            <div className='inner_container d-flex'>
                <div className='img_container center_container'>
                    <p className='title'>ONLINE SHOPPING</p>
                    <img src={SignupImg} width={400} height={400} alt="signup" />
                </div>
                <div className="form_container border_left center_container">
                    <SignUpForm storeData={storeSignUpData} submitForm={signup} signUpError={error} />
                </div>
            </div>
        </div>

    )
}

export default SignUp;