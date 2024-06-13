import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { setIsLogin } from '../../features/userAuth';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function BasicMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        console.log('clicked logout');
        localStorage.removeItem('token')
        dispatch(setIsLogin({
            isLogin: false,
            data: ''
        }))
        localStorage.removeItem('isLogin')
        navigate('/login', { replace: true })
    }
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    minWidth: 0,
                    padding: 0,

                }}
            >
                <AccountCircleIcon sx={{ fill: 'white' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    logout()
                }}>Logout</MenuItem>
            </Menu>
        </div >
    );
}
