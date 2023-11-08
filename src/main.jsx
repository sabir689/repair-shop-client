import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import MyServices from './Dashboard/MyServices';
import AllServices from './Pages/Services/AllServices';
import Details from './Pages/Services/DetailsPage/Details';
import AddServices from './Dashboard/AddServices';
import BookService from './Pages/Services/BookService';
import Login from './LogIn/Login';
import AuthProvider from './FirebaseConfig/AuthProvider';
import Register from './Register/Register';
import Bookings from './Pages/Bookings/Bookings';
import PrivateRoute from './FirebaseConfig/PrivateRoute';
import ManageServices from './Dashboard/ManageServices';
import UpdateAdded from './Dashboard/UpdateAdded';
import ErrorPage from './Root/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/services",
        element:<Services></Services>
      },
      {
        path:"/allServices",
        element:<PrivateRoute><AllServices></AllServices></PrivateRoute>
      },
      {
        path:"/myServices",
        element:<MyServices></MyServices>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/manageServices",
        element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
        loader:()=>fetch('https://services-server-sooty.vercel.app/added')
      },

      {
        path: 'details/:id', 
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://services-server-sooty.vercel.app/services/${params.id}`)
      },
      {
        path: 'book/:id', 
        element: <BookService></BookService>,
        loader: ({params}) => fetch(`https://services-server-sooty.vercel.app/services/${params.id}`)
      },
      {
        path: '/addServices', 
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
   
      },
      {
        path: 'updateAdded/:id', 
        element: <PrivateRoute><UpdateAdded></UpdateAdded></PrivateRoute>,
        loader:({params})=>fetch(`https://services-server-sooty.vercel.app/added/${params.id}`)
   
      },
      {
        path: 'bookings', 
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
   
      },
      
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
