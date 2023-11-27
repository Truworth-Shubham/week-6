import React, { useState, useEffect, useRef } from 'react'
import './index.css'

const App = () => {

  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);
  const inputArea = useRef()

  const operator = ["/", "*", "-", "+", ".", "%"];
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  useEffect(() => {
    inputArea.current.focus()
  }, [])

  const handleClick = (value) => {

    if (number.includes(value)) {

      if (value == 0) {
        if (data.length == 1 && data[0] == 0) return
        else if (data[data.length - 1] == 0 && operator.includes(data[data.length - 2]) && data[data.length - 2] != ".") return
      }
      if (data[data.length - 1] == 0 && operator.includes(data[data.length - 2]) && data[data.length - 2] != ".") return
      if (data.length == 1 && data[0] == 0) return
      if (data[data.length - 1] === "%") return
      setData(data.concat(value))
    }

    else {
      if (data == "" && value == ".") {
        setData(data.concat("0" + value))
      }
      else if (data === "") return
      else if(value === "%" && data[data.length-1] === "%")return
      else if (operator.includes(data[data.length - 1]) && data[data.length - 1] !== "%"){
        return
      } 
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

  const backspace = () => {

    if (data == "Error") {
      setData("")
    }
    else if (data == Infinity) {
      setData("")
    }
    else {
      setData(data.slice(0, data.length - 1))
    }
  }

  const calculate = () => {
    try {
      if (data.includes("%")) {
        let tempIndex = []
        let smallArry = ""
        for (let i = 0; i < data.length; i++) {
          smallArry += data[i]
          if (data[i] == "%") {
            tempIndex.push(smallArry)
            smallArry = ""
          }
        }
        if (smallArry !== "") tempIndex.push(smallArry)
        let tempResult = 0
        let remainingString = ""
        let continueExpression = ""
        for (let i = 0; i < tempIndex.length; i++) {
          let firstExpression = tempIndex[i]
          let tempOperator = ""
          let count = 0
          if (firstExpression[firstExpression.length - 1] === "%") {
            let percentNumber = ""
            for (let j = firstExpression.length - 2; j >= 0; j--) {
              if (operator.includes(firstExpression[j]) && firstExpression[j] !== ".") {
                count++
                if (count === 1) {
                  tempOperator = firstExpression[j]
                  continue
                }
              }
              if (count === 0) {
                percentNumber += firstExpression[j]
              } else {
                remainingString += firstExpression[j]
              }
            }
            if (count == 0) {
              percentNumber = [...percentNumber].reverse().join("")
              continueExpression = (percentNumber / 100).toString()
              continue;
            }
            percentNumber = [...percentNumber].reverse().join("")
            continueExpression += [...remainingString].reverse().join("")
            continueExpression = eval(continueExpression)
            tempResult = (continueExpression * percentNumber) / 100
            tempResult = tempResult.toString()
            tempResult = eval(continueExpression.toString().concat(tempOperator).concat(tempResult.toString()))
            continueExpression = tempResult.toString()
            remainingString = ""
          } else {
            remainingString += firstExpression
          }
        }
        setData(eval(continueExpression.concat(remainingString)).toString())
        return

      }
      else if (isNaN(eval(data).toString())) {
        setData("Error")
        setToggle(true)
        setTimeout(() => {
          setData("")
          setToggle(false)
        }, 1000)

      }
      else {
        setData(eval(data).toString());
      }
    }
    catch (err) {
      setData("Error");
      setToggle(true)
      setTimeout(() => {
        setData("")
        setToggle(false)
      }, 1000)
    }

  }

  return (
    <>

      <div className='body' onKeyDown={(e) => {
        if (e.key === "Enter") {
          calculate()
        }
        else if (e.key === "Backspace") {
          backspace()
        }
        else if (e.key === "Delete") {
          setData("");
        }
        handleClick(e.key)
      }
      }>
        <div className='container'>
          <form>
            <textarea type='text' value={data} onChange={(text) => setData(text.target.value)} readOnly className={toggle ? "error" : null} ref={inputArea} />
          </form>
          <div className='keypad'>
            <p id='clear' onClick={clear} className='gray'>A/C</p>
            <p id='backspace' onClick={backspace} className='gray'><i className="fa-solid fa-delete-left"></i></p>
            <p onClick={() => handleClick("%")} className='gray'>%</p>
            <p onClick={() => handleClick("/")} className='gold'>&divide;</p>
            <p onClick={() => handleClick("7")}>7</p>
            <p onClick={() => handleClick("8")}>8</p>
            <p onClick={() => handleClick("9")}>9</p>
            <p onClick={() => handleClick("*")} className='gold'>&times;</p>
            <p onClick={() => handleClick("4")}>4</p>
            <p onClick={() => handleClick("5")}>5</p>
            <p onClick={() => handleClick("6")}>6</p>
            <p onClick={() => handleClick("-")} className='gold'>&ndash;</p>
            <p onClick={() => handleClick("1")}>1</p>
            <p onClick={() => handleClick("2")}>2</p>
            <p onClick={() => handleClick("3")}>3</p>
            <p onClick={() => handleClick("+")} className='gold'>+</p>
            <p onClick={() => handleClick("0")}>0</p>
            <p onClick={() => handleClick(".")}>.</p>
            <p onClick={() => calculate("=")} id='result' >=</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
