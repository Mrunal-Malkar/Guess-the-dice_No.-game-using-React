import React from 'react'
import "./game_page.css"

const Game_page = () => {
  return (
    <div className='h-screen'>
      <div className='w-full h-2/4 bg-slate-400'>
        <div className='w-full h-2/4 flex justify-between'>
          <div className='w-1/2 text-3xl p-2 ms-1 mt-1 flex justify-start'>
            <h1>Total score:</h1>
            <p className='ms-2 text-4xl'>0</p>
          </div>
          <div className='w-1/2 flex '>
            <button className='img1 w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm  text-5xl'><p className='flex self-center'>1</p></button>
            <button className='img2 w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm  text-5xl'><p className='flex self-center'>2</p></button>
            <button className='img3 w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm  text-5xl'><p className='flex self-center'>3</p></button>
            <button className='img4 w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm  text-5xl'><p className='flex self-center'>4</p></button>
            <button className='img5 w-1/6 h-2/4  flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm text-5xl'><p  className='flex self-center'>5</p></button>
            <button className='img6 w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-sm  text-5xl'><p className='flex self-center'>6</p></button>
          </div>
        </div>
        <div className='w-full h-2/4'>
        
        </div>
      </div>
      <div className='w-full h-2/4 bg-red-400'>
        <div className='w-full h-2/4'>
        </div>
        <div className='w-full h-2/4'>
        </div>
      </div>
    </div>
  )
}

export default Game_page
