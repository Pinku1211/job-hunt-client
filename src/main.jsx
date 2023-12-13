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
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs.jsx';
import AddJob from './Pages/AddJob.jsx';
import MyJobs from './Pages/MyJobs/MyJobs.jsx';
import Blogs from './Pages/Blogs.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Details from './Pages/Details.jsx';
import Private from './components/Private/Private.jsx';
import AllDetails from './Pages/AllJobs/AllDetails.jsx';
import Update from './Pages/MyJobs/Update.jsx';
import UploadResume from './Pages/UploadResume/UploadResume.jsx';

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
        loader: () => fetch('https://job-hunt-final-server.vercel.app/jobs')
      },
      {
        path: '/appliedJobs',
        element: <Private><AppliedJobs></AppliedJobs></Private>,
        // loader: () => fetch('https://job-hunt-final-server.vercel.app/applicants'),
      
      },
      {
        path: '/addJob',
        element: <Private><AddJob></AddJob></Private>,
      },
      {
        path: '/myJobs',
        element: <Private><MyJobs></MyJobs></Private>,
        loader: () => fetch('https://job-hunt-final-server.vercel.app/jobs')
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
        loader: ({params}) => fetch(`https://job-hunt-final-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/allDetails/:id',
        element: <Private><AllDetails></AllDetails></Private>,
        loader: ({params}) => fetch(`https://job-hunt-final-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Private><Update></Update></Private>,
        loader: ({params}) => fetch(`https://job-hunt-final-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/uploadResume',
        element: <UploadResume></UploadResume>
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
