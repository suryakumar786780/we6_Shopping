import React from 'react'

import ThankImage from '../../utils/thankyou.png'

const ThankyouModal = () => {
  return (
    <div className='thankpage'>
      <img src={ThankImage} width={500} height={300} alt='thank you' />
      <div className='thank-content'>
        <h2>Thank You,</h2>
        <h3>Your Order is Confirmed.</h3>
      </div>

    </div>
  )
}

export default ThankyouModal