import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MiniDrawer from './components/mini-drawer/drawer';
import ErrorPage from './pages/404page/errorpage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MiniDrawer />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <MiniDrawer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <MiniDrawer />,
        errorElement: <ErrorPage />,
      },  
      {
        path: "/preview/:id",
        element: <MiniDrawer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <MiniDrawer />,
        errorElement: <ErrorPage />,
      },        
      {
        path: "/wishlist",
        element: <MiniDrawer />,
        errorElement: <ErrorPage />,
      } 
      
  ]);

const Router = () => {
    return (
       <RouterProvider router={router} />
    )
}

export default Router