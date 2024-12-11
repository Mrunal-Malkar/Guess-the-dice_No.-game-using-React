import { Link } from "react-router-dom"
import "./landing_page.css"
import React, { useRef } from 'react'

const Landing_page = () => {

  let linktagiam=useRef();
  const changeColor=()=>{
    linktagiam.current.style.backgroundColor="#45B345";
  }
  const resetColor=()=>{
    linktagiam.current.style.backgroundColor="#64748B";
  }

  return (
    <div className="hero h-full w-full flex justify-between align-middle">
      <div className="w-2/4 h-3/4">
        <div className="heroimage w-full h-full"></div>
      </div>
      <div className="w-2/4 h-3/4 sidegif">
        <div>
          <h1 id="landingheading" className="text-9xl font-bold">Guess the Glass</h1>
        </div>
        <div className="w-full flex mt-16 justify-center">
          <Link  ref={linktagiam} onMouseOver={()=>{changeColor()}} onMouseLeave={()=>{resetColor()}} className="p-5 rounded-xl w-44 flex justify-center align-middle bg-slate-500"to="/game"><span>Play Game</span></Link>
        </div>
        <button></button>
      </div>
    </div>
  )
}

export default Landing_page
