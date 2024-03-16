import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import reportWebVitals from './reportWebVitals';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Carousal from './components/carousal';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import CardList from './components/Products/CardList';
import International from './components/International';
import Carporate from './components/carporate';
import Customized from './components/Custamized';
import Videos from './videos';
import CardDetails from './components/Products/CardDetails';
import IntCardDetails from './components/int_CardDetails';
import CustamizedCardDetails from './components/CustamizedCardDetails';
import InquiryForm from './components/InquiryForm';
import ErrorPage from './components/ErrorPage';
import LikeContext from './context/LikeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LikeContext><App /></LikeContext>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Carousal /> },
      { path: '/home', element: <Carousal /> },
      { path: '/aboutUs', element: <AboutUs /> },
      { path: '/contact', element: <Contact /> },
      { path: '/india', element: <CardList /> },
      { path: '/international', element: <International /> },
      { path: '/carporate', element: <Carporate /> },
      { path: '/custam', element: <Customized /> },
      { path: '/media', element: <Videos /> },
      { path: '/pets/:id', element: <CardDetails /> },
      { path: '/products/:id', element: <IntCardDetails /> },
      { path: '/tours/:id', element: <CustamizedCardDetails /> },
      { path: '/form', element: <InquiryForm /> },
    ]
  }
])

root.render(
  <>
    <RouterProvider router={routes} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
