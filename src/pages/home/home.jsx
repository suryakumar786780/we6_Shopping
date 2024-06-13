import React from 'react'
import NavMain from '../../components/nav-main/navmain'
import Partners from '../../components/partners/partners'
import "./home.scss"
const Home = () => {
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

export default Home