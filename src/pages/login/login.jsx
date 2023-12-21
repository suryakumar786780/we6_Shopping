import React from 'react'
import NavComp from '../../components/nav-bar/nav'
import NavMain from '../../components/nav-main/navmain'
import "./login.scss"
import Partners from '../../components/partners/partners'
const Login = () => {
  return (
    <>
      <div className='outer'>
        <div className='inner'>
          <NavMain />
          <Partners />
        </div>
      </div>
    </>

  )
}

export default Login