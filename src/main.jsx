import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainOutlet from './MainComponents/MainOutlet/MainOutlet';
import Home from './MainComponents/Home/Home';
import ErrorPage from './MainComponents/ErrorPage';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './Auth/Register';
import Login from './Auth/Login';
import AddServices from './Pages/AddServices';
import PrivateRoute from './AuthProvider/PrivateRoute';
import AllServices from './Pages/AllServices';
import SingleService from './Pages/SingleService';
import ManageServices from './Pages/ManageServices';
import BookedServices from './Pages/BookedServices';
import ServiceToDo from './Pages/ServiceToDo';
import ThemeWrapper from './Theme/ThemeWrapper';
import UpdateService from './Pages/UpdateService';
import Academic from './Extra/Academic';
import Skill from './Extra/Skill';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/addServices',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path: '/services',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:5000/allServices', {credentials: 'include'})
      },
      {
        path: '/service/:id',
        element: <PrivateRoute><SingleService></SingleService></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`, {credentials: 'include'})

      },
      {
        path: '/manageServices',
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
      },
      {
        path: '/updateService/:id',
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`, {credentials: 'include'})
      },
      {
        path: '/bookedServices',
        element: <PrivateRoute><BookedServices></BookedServices> </PrivateRoute>
      },
      {
        path: '/serviceToDo',
        element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
      },
      {
        path: '/academic',
        element: <Academic></Academic>
      },
      {
        path: '/skill',
        element: <Skill></Skill>
      },

      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </AuthProvider>
  </StrictMode>,
)
