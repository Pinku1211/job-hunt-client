import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Root from './Pages/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Error from './Pages/Error.jsx';
import AllJobs from './Pages/AllJobs/AllJobs.jsx';
import AppliedJobs from './Pages/AppliedJobs.jsx';
import AddJob from './Pages/AddJob.jsx';
import MyJobs from './Pages/MyJobs.jsx';
import Blogs from './Pages/Blogs.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Details from './Pages/Details.jsx';
import Private from './components/Private/Private.jsx';
import AllDetails from './Pages/AllJobs/AllDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/addJob',
        element: <AddJob></AddJob>
      },
      {
        path: '/myJobs',
        element: <MyJobs></MyJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/details/:id',
        element: <Private><Details></Details></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/allDetails/:id',
        element: <Private><AllDetails></AllDetails></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
