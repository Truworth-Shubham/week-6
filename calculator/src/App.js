import React, { useState,useEffect,useRef } from 'react'
import './index.css'

const App = () => {
  
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);
  const inputArea = useRef()
  
  const operator = ["/", "*", "-", "+", "."];
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  useEffect(()=>{
    inputArea.current.focus()
  },[])
  const handleClick = (value) => {
    if (number.includes(value)) 
    {
      if(value == 0){
        if(data.length == 1 && data[0] == 0) return
        else if(data[data.length - 1] == 0 && operator.includes(data[data.length - 2]) && data[data.length-2] != ".") return        
      }
      if(data[data.length - 1] == 0 && operator.includes(data[data.length - 2]) && data[data.length-2] != ".") return
      if(data.length==1 && data[0]==0) return

      setData(data.concat(value))
    }
    else
    {
      if (data == "" || operator.includes(data[data.length-1])) return

      else if (value == ".") {
        for (let i = data.length - 1; i >= 0; i--) {
          if (operator.includes(data[i])) {
            if (data[i] === ".") return
            setData(data.concat(value))
          }
        }
        setData(data.concat(value))
      }
      else if (operator.includes(value)) {
        setData(data.concat(value))
      }
    }
  }
  const clear = () => setData("")
  const backspace = () => setData(data.slice(0, -1))
  const calculate = () => {
    try {
      setData(eval(data).toString());
    }
    catch (err) {
      setData("Error");
      setToggle(true)
      setTimeout(()=>{
        setData("")
        setToggle(false)
      },1000)
    }
  }

  return (
    <>
      <div className='body' onKeyDown={(e) => 
      {
        if (e.key == "Enter") {
          calculate()
        }
        else if (e.key == "Backspace") {
          backspace()
        }
        else if (e.key == "Delete") {
          setData("");
        }
        handleClick(e.key)
      }
      }>
        <div className='container'>
          <form>
            <textarea type='text' value={data} onChange={(text) => setData(text.target.value)} readOnly className={toggle ? "error" : null} ref={inputArea}/>
          </form>
          <div className='keypad'>
            <button id='clear' onClick={clear}>A/C</button>
            <button id='backspace' onClick={backspace}><i className="fa-solid fa-delete-left"></i></button>
            <p onClick={() => handleClick("/")}>&divide;</p>
            <p onClick={() => handleClick("7")}>7</p>
            <p onClick={() => handleClick("8")}>8</p>
            <p onClick={() => handleClick("9")}>9</p>
            <p onClick={() => handleClick("*")}>&times;</p>
            <p onClick={() => handleClick("4")}>4</p>
            <p onClick={() => handleClick("5")}>5</p>
            <p onClick={() => handleClick("6")}>6</p>
            <p onClick={() => handleClick("-")}>&ndash;</p>
            <p onClick={() => handleClick("1")}>1</p>
            <p onClick={() => handleClick("2")}>2</p>
            <p onClick={() => handleClick("3")}>3</p>
            <p onClick={() => handleClick("+")}>+</p>
            <p onClick={() => handleClick("0")}>0</p>
            <p onClick={() => handleClick(".")}>.</p>
            <p onClick={() => calculate("=")} id='result'>=</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
