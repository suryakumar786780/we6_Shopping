import React, { useEffect, useState } from 'react'

import "./nav-main.scss";
import WomenShop from "../../utils/womenshopping.png"
import MenShop from '../../utils/mensclothing.png'
import Jewellery from '../../utils/jewellery.png'
import ElectonicsImg from '../../utils/electronics.png'

const NavMain = () => {
    const [currentAngle, setCurrentAngle] = useState(0);
    const angleItem = [WomenShop, MenShop, Jewellery, ElectonicsImg];

    useEffect(() => {
        let ang = 0;
        const intervalId = setInterval(() => {
            setCurrentAngle(ang);
            ang = ang === angleItem.length - 1 ? 0 : ang + 1;
        }, 3000)
        return () => clearInterval(intervalId);

    }, [])
console.log('currentAngle', currentAngle);
    return (
        <main>
            <div className='container'>
                <div className='text-container'>
                    <div className="assistant_text">
                        Greatest journey with your <br />shopping assistant
                    </div>
                    <div className='form-div'>
                        <p>Admin Login</p>
                        <div className='input-div d-flex'>
                            <input type="text" />
                            <button>Send</button>
                        </div>

                    </div>
                </div>
                <div className='img-container'>
                    {/* <HomeCarousel /> */}
                    <img src={angleItem[currentAngle]} alt='we-6' width={200} height={200}/>
                    <div className="img-bg"></div>
                </div>
            </div>
        </main>
    )
}

export default NavMain