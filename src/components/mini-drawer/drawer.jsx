import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useParams } from 'react-router-dom';
import Home from '../../pages/home/home';
import Shop from '../../pages/shop_page/shop';
import About from '../../pages/about/about';
import Preview from '../../pages/preview/preview';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../features/getCategoriesSlicer';
import { setCategory } from '../../features/allSlicer';

import TungstenIcon from '@mui/icons-material/Tungsten';
import DiamondIcon from '@mui/icons-material/Diamond';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import CategoryIcon from '@mui/icons-material/Category';
import NavComp from '../nav-bar/nav';
import CartComp from '../../pages/cartPage/cart';
import Wishlist from '../../pages/wishlist/wishlist';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  // functionalities
  const loc = useLocation();
  const useP = useParams();
  const [catg, setCatg] = useState([]);

  const theme = useSelector(state => state.all.theme);
  const category = useSelector(state => state.all.category)
  const dispatch = useDispatch()

  const cat_icons = [<CategoryIcon />, <TungstenIcon />, <DiamondIcon />, <ManIcon />, <WomanIcon />]
  const [active, setActive] = useState(category);

  const changeCatg = (e) => {
    dispatch(setCategory(e))
  }

  useEffect(() => {
    (async () => {
      const res = await dispatch(getCategories());
      if (res.payload && res.payload.length > 0)
        setCatg(["All", ...res.payload]);
    })()
  }, [])


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {
        loc.pathname === '/shop' ? <><Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: theme === 'light' ? 'rgb(117, 85, 147)' : 'black', borderRight: '1px solid white' } }}>
          <DrawerHeader >
            <IconButton onClick={() => setOpen(!open)} sx={{ color: 'white' }}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {catg.length > 0 && catg.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => { setActive(text); changeCatg(text) }} style={{ backgroundColor: active === text && theme === 'dark' ? 'gray' : active === text ? 'violet' : '' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    color: 'white'
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    {cat_icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{
                    opacity: open ? 1 : 0, textTransform: 'capitalize', color: 'white'
                  }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

        </Drawer></> : ''
      }

      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <NavComp />
        {
          loc.pathname === '/' ? <Home /> : loc.pathname === '/shop' ? <Shop /> : loc.pathname === '/about' ? <About /> : loc.pathname === '/cart' ? <CartComp /> : loc.pathname === '/wishlist' ? <Wishlist /> : useP.id && <Preview />
        }
      </Box>
    </Box>
  );
}