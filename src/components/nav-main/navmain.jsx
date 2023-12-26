import React, { useEffect, useState } from 'react'

import "./nav-main.scss";
import WomenShop from "../../utils/womenshopping.png"
import MenShop from '../../utils/mensclothing.png'
import Jewellery from '../../utils/jewellery.png'
import ElectonicsImg from '../../utils/electronics.png'
import { useSelector } from 'react-redux';

const NavMain = () => {
    const [pos, setPos] = useState(0);
    const angleItem = [WomenShop, MenShop, Jewellery, ElectonicsImg];

    const theme = useSelector(state =>  state.all.theme);

    useEffect(() => {
        let ang = 0;
        const intervalId = setInterval(() => {
            setPos(ang);
            ang = ang === angleItem.length - 1 ? 0 : ang + 1;
        }, 2000)
        return () => clearInterval(intervalId);
    }, [])

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
                    <img src={angleItem[pos]} alt='we-6' width={200} height={200} />
                    <div className="img-bg"></div>
                </div>
            </div>
        </main>
    )
}

export default NavMain