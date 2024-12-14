import React from 'react'
import { useState,useRef} from 'react';
import "./game_page.css"

const Game_page = () => {

  let dicedisplay=useRef();
  const [numberChoose, setNumberChoosed] = useState(0);
  const[dicestate,setDicestate]=useState("dicestart");
  const[totalscore,setTotalScore]=useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let randomchoice=getRandomInt(6)+1;
  let dice = [1, 2, 3, 4, 5, 6];
  let dicepic={
    1:"./dice_one.png",
    2:"./dice_two.webp",
    3:"./dice_three.png",
    4:"./dice_four.svg",
    5:"./dice_five.webp",
    6:"./dice_six.webp",
  }

  const Handlestart=()=>{
    if(numberChoose!=0){
    console.log(dicedisplay.current)
    console.log(randomchoice);
    setDicestate("diceanimate");
    setTimeout(() => {
      setDicestate("dicestart")
    },5000);
    setTimeout(()=>{
      setDicestate("gotit")
      dicedisplay.current.style.backgroundImage=`url(${dicepic[randomchoice]})`
    },5000);
    if(randomchoice==numberChoose){
      setTotalScore(totalscore+1);
    }}
  };

  const Handlereset=()=>{
    setTotalScore(0);
  }

  return (
    <div className='h-screen'>
      <div className='w-full h-2/4 bg-slate-400'>
        <div className='w-full h-2/4 flex justify-between'>
          <div className='w-1/2 text-3xl p-2 ms-1 mt-1 flex justify-start'>
            <h1>Total score:</h1>
            <p className='ms-2 text-4xl'>{totalscore}</p>
          </div>
          <div className='w-1/2 flex '>
            {dice.map((value, i) => (
              <button
                style={{ backgroundColor: value==numberChoose ? "white" :"" }}
                key={value} className='buttonNumbers w-1/6 h-2/4 flex align-middle justify-center bg-slate-500 border-2 p-2 mt-1 rounded-xl text-5xl' onClick={() => {
                  setNumberChoosed(value)
                }}><p className='flex self-center'>{value}</p></button>))
            }
          </div>
        </div>
        <div className='w-full h-2/4 flex justify-center align-bottom'>
          <div className={`w-56 h-full ${dicestate}`}ref={dicedisplay}></div>
        </div>
      </div>
      <div className='w-full h-2/4 bg-red-400'>
        <div className='w-full h-2/4 flex justify-center align-top'>
        <div className='flex justify-between w-56 h-2/6'>
          <button className='text-xl bg-cyan-700 p-2 w-2/4 h-full'onClick={Handlestart}>Start</button>
          <button className='text-xl bg-cyan-700 p-2 w-2/4 h-full'onClick={Handlereset}>Reset</button>
        </div>
        </div>
        <div className='w-full h-2/4 flex align-bottom'>
        <div className='w-2/12 self-end flex align-bottom flex-col'>
        <ol className='mb-4 ms-2 bg-gray-400'>
        <h1>Instruction:</h1>
          <li>Please select the number to get started.</li>
        </ol>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Game_page
