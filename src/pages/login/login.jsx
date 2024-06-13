import React, { useState } from 'react'

import LoginImg from '../../utils/login.png'

import { logInUser } from '../../features/userAuth'

import "./login.scss"
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/loginForm';
import { useNavigate } from 'react-router-dom';
import { replace } from 'formik';


const Login = () => {

  const dispatch = useDispatch()
  let navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin')

  const [saveLoginData, setSaveLoginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState('');

  const storeLoginData = (key, value) => {
    setSaveLoginData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  if (isLogin) {
    console.log('login successful');
  }

  const login = async () => {
    let res = await dispatch(logInUser(saveLoginData));
    if (res?.payload?.data?.status === 'success') {
      localStorage.setItem('isLogin', true)
      localStorage.setItem('token', res.payload.data.token)
      navigate('/', { replace: true })
    } else {
      setError(res.payload.response.data.message);
    }
  }

  return (
    <div className="main_container">
      <div className='inner_container d-flex'>
        <div className='img_container center_container'>
          <p className='title'>ONLINE SHOPPING</p>
          <img src={LoginImg} width={400} height={400} alt="login" />
        </div>
        <div className="form_container border_left center_container">
          <LoginForm storeData={storeLoginData} submitForm={login} loginError={error} />
        </div>
      </div>
    </div>
  )
}

export default Login