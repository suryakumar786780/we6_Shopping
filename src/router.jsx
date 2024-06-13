import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MiniDrawer from './components/mini-drawer/drawer';
import Login from './pages/login/login'
import ErrorPage from './pages/404page/errorpage';
import SignUp from './pages/signup/signup';
import { useSelector } from 'react-redux';

const publicRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Login />,
  },
  {
    path: "/",
    element: <MiniDrawer />,
    errorElement: <ErrorPage />,
  },
])

const privateRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login />,
  },
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
  },
]);

const Router = () => {
  // const isLogin = localStorage.getItem('isLogin');
  // const loginStatus = useSelector(state => state.loginStatus);
  // useEffect(() => {
  //   console.log('isLogin from router: ', loginStatus);

  // }, [loginStatus.isLogin, isLogin])
  return (
    <>
      {/* <RouterProvider router={isLogin ? privateRouter : publicRouter} /> */}
      <RouterProvider router={privateRouter} />
    </>
  )
}

export default Router