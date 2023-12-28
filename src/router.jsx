import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import Login from './pages/login/login';
// import Register from './pages/register';
// import Home from './pages/home';
// import ErrorPage from './pages/errorpage';
// import Shop from './pages/shop_page/shop';
// import About from './pages/about';
import MiniDrawer from './components/mini-drawer/drawer';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MiniDrawer />,
      errorElement: <>404</>,
    },
    {
        path: "/shop",
        element: <MiniDrawer />,
      },
      {
        path: "/about",
        element: <MiniDrawer />,
      },  
      {
        path: "/preview/:id",
        element: <MiniDrawer />,
        errorElement: <>404</>,
      },
      {
        path: "/cart",
        element: <MiniDrawer />,
        errorElement: <>404</>,
      },        
      {
        path: "/wishlist",
        element: <MiniDrawer />,
      } 
      
  ]);

const Router = () => {
    return (
       <RouterProvider router={router} />
    )
}

export default Router