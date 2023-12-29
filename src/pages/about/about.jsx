import React from 'react'
import About_1 from '../../utils/about1.png'
import About_2 from '../../utils/about2.png'

import './about.scss'
const About = () => {
  return (
    <div>
      <div className="outer">
        <div className="inner">
          <div className="about-1">
            <div className="we">
              Who We Are <br />
              WE-6 SHOPPING is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. WE-6 SHOPPING strives to be Earth's most customer-centric company, Earth's best employer, and Earth's safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by WE-6 SHOPPING, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, WE-6 SHOPPING Echo, Alexa, Just Walk Out technology, WE-6 SHOPPING Studios, and The Climate Pledge are some of the things pioneered by WE-6 SHOPPING.
            </div>
            <img src={About_1} alt='about_1' />
          </div>
          <div className="about-1">
            <img src={About_2} alt='about_2' />
            <div className="we">
              Working to earn and keep our customer's trust is the single biggest driver of We-6 Shopping Day 1 approach. We-6 Shopping decision-making process asks employees to consider whether an action is a one-way door—consequential and nearly irreversible—or a two-way door, easy to change course and go back. Discover more about who we are through our Annual Letters to Shareholders from 1997 through today.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About