import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Fade, Tooltip, tooltipClasses } from '@mui/material';
import { useSelector } from 'react-redux';
import SelectTheme from '../themeswitch';

import "./nav.scss"
import styled from '@emotion/styled';

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 150,
    },
});

const NavComp = () => {

    const loc = useLocation();
    const theme = useSelector(state => state.all.theme);
    const cart = useSelector(state => state.all.cart);
    const fav = useSelector(state => state.all.fav);
    const info = useSelector(state => state.all.customerInformation);

    let tooltip = 'Hello user';
    if (info.name) {
        tooltip = 'Hello ' + info.name + ',\n ' + info.email + ',\n ' + info.mobNum;
    }
    return (
        <>
            <div className={`fullnav p-20 ${theme}`}>
                <div className='inside '>
                    <div className='d-flex logo'>
                        <ShoppingCartIcon className='pr-10 logo-icon' />
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
                                <Badge badgeContent={cart.length} color="secondary">
                                    <ShoppingBagIcon sx={{ fill: 'white' }} />
                                </Badge>
                            </div>
                        </Link>
                        <Link to='/wishlist' className='text-decoration-none'>
                            <div className={`${loc.pathname === '/wishlist' ? 'active' : ''} `}>
                                <Badge badgeContent={fav.length} color="secondary">
                                    <FavoriteIcon sx={{ fill: 'white' }} />
                                </Badge>
                            </div>
                        </Link>
                        <CustomWidthTooltip title={tooltip} arrow TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <div className={`${loc.pathname === '/user' ? 'active' : ''} `}><AccountCircleIcon sx={{ fill: 'white' }} /></div>
                        </CustomWidthTooltip >
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavComp