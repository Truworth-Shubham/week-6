import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [data,setData] = useState("");
  const operator = ["/","*","-","+","."];  
  const handelClick = (e) => {
   if(!operator.includes(e.target.name) ){
    setData(data.concat(e.target.name))
  }
  else {
   
    if(data == "" || operator.includes(data.slice(-1)))return
   
    else if(e.target.name == "."){
      for(let i=data.length-1; i>=0; i--){
        if(operator.includes(data[i])){
          if(data[i] === "."){
              console.log("dot again")
              return
            }
            setData(data.concat(e.target.name))
          }
        }
        setData(data.concat(e.target.name))
    }
    else{
      setData(data.concat(e.target.name))
    }
   }

    }
    const clear = () =>{
      setData("")
    }
    const backspace = () => {
      setData(data.slice(0,-1))
    }
    const calculate = () => {
      try{
        setData(eval(data).toString());
      }
      catch(err){
        setData("Error");
      }
    }
   
   return (
    <>
      <div className='body'>
        <div className='container'>
          <form>
            <input type='text' value={data} onChange={(text)=> setData(text.target.value)} readOnly/>
          </form>
          <div className='keypad'>
            <button id='clear' onClick={clear}>Clear</button>
            <button id='backspace' onClick={backspace}>C</button>
            <button name='/' onClick={handelClick}>&divide;</button>
            <button name='7' onClick={handelClick}>7</button>
            <button name='8' onClick={handelClick}>8</button>
            <button name='9' onClick={handelClick}>9</button>
            <button name='*' onClick={handelClick}>&times;</button>
            <button name='4' onClick={handelClick}>4</button>
            <button name='5' onClick={handelClick}>5</button>
            <button name='6' onClick={handelClick}>6</button>
            <button name='-' onClick={handelClick}>&ndash;</button>
            <button name='1' onClick={handelClick}>1</button>
            <button name='2' onClick={handelClick}>2</button>
            <button name='3' onClick={handelClick}>3</button>
            <button name='+' onClick={handelClick}>+</button>
            <button name='0' onClick={handelClick}>0</button>
            <button name='.' onClick={handelClick}>.</button>
            <button name='=' onClick={calculate} id='result'>=</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
