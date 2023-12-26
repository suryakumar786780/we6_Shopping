import React from 'react'
import "./nav.scss" 

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Tooltip, Zoom } from '@mui/material';
import { useSelector } from 'react-redux';
import SelectTheme from '../themes/themeswitch';

const NavComp = () => {
    const loc = useLocation();
    const state = useSelector(state => {
        return {
            theme : state.all.theme,
            cart : state.all.cart
        }
    })
    console.log(state.theme);
    return (
        <>
            <div className={`fullnav p-20 ${state.theme}`}>
                <div className='inside '>
                    <div className='d-flex logo'>
                        <ShoppingCartCheckoutIcon className='pr-10 logo-icon' />
                        <div>
                            <p>We-6</p>
                            <p>Shopping</p>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul className='d-flex text-decoration-none'>
                            <Link to='/' className='text-decoration-none'><li className={`${loc.pathname === '/' ? 'active' : ''} `}>Home</li></Link>
                            <Link to='/shop' className='text-decoration-none'><li className={`${loc.pathname === '/shop' ? 'active' : ''} `}>Shop</li></Link>
                            <Link to='/about' className='text-decoration-none'><li className={`${loc.pathname === '/about' ? 'active' : ''} `}>About</li></Link>
                        </ul>
                    </nav>
                    <div className='cart'>
                        <SelectTheme />
                        <Link to='/cart' className='text-decoration-none'>
                            <div className={`${loc.pathname === '/cart' ? 'active' : ''} `}>
                                <Badge badgeContent={state.cart.length} color="secondary">
                                    <ShoppingBagIcon sx={{ fill: 'white' }} />
                                </Badge>
                            </div>

                        </Link>
                        <div className={`${loc.pathname === '/fav' ? 'active' : ''} `}><FavoriteIcon sx={{ fill: 'white' }} /></div>
                        <Tooltip title="Hi, Welcome Surya" arrow TransitionComponent={Zoom}>
                            <div className={`${loc.pathname === '/user' ? 'active' : ''} `}><AccountCircleIcon sx={{ fill: 'white' }} /></div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavComp