import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Mainlayout from './Components/MainLayout/Mainlayout'
import MainHome from './Components/MainHome/MainHome'
import About from './Components/About/About'
import Port from './Components/Port/Port'
import Contact from './Contanct/Contact'




export default function App() {
  let route = createHashRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true, 
          element: <MainHome />,
        },
        {
          path: "Home", 
          element: <MainHome />,
        },
        {
          path: "About", 
          element: <About/>,
        },
        {
          path: "Portfolio", 
          element: <Port/>,
        },
        {
          path: "Contact", 
          element: <Contact/>,
        },
      ],
    },
  ]);
  return (
    <>
  <RouterProvider router={route} />
    </>
  )
}
