import { useState } from 'react';
import React from 'react';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Landing_page from './components/landing_page'
import Game_page from './components/game_page';

function App() {

  const Navigate=createBrowserRouter([
    {
      path:"/",
      element:<Landing_page/>
    },
    {
      path:"/game",
      element:<Game_page/>
    },
  ])

  return (
    <>
  <RouterProvider router={Navigate}></RouterProvider>  
    </>
  )
}

export default App
