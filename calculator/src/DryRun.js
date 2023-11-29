// Calculator.js

import React, { useState,useEffect } from 'react';
import './Calculator.css'; // Import your CSS file for styling

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const numberArr = ["0","1","2","3","4","5","6","7","8","9"]
  const operatorArr = ["+","-","*","/","%"]

  const handleNumberClick = (number) => {
    if (display === '0' && number !== '.') {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number.toString());
    }
  };

  const handleOperatorClick = (nextOperator) => {
    
    console.log(display[display.length -1]) 
    if(operatorArr.includes(display[display.length - 1])){
      setPrevValue(nextOperator)
      return
    }
    if (operator && display !== '0') {
      console.log("calulate runnnn")
      calculate();
    } else {
      if(display !== '0'){
        console.log(display,typeof(parseFloat(display)))
        let temp = parseFloat(display)
        console.log(temp)
        setPrevValue(parseFloat(display));
        console.log(prevValue,display)
      }
      
    }
    setOperator(nextOperator);
    setDisplay(operator);
  };

  const calculate = () => {
    const currentVal = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = prevValue + currentVal;
        break;
      case '-':
        result = prevValue - currentVal;
        break;
      case '*':
        result = prevValue * currentVal;
        break;
      case '/':
        result = prevValue / currentVal;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPrevValue(result);
    setOperator(null);
  };

useEffect(()=>{
  console.log("first")
},[prevValue])

  const handlePercentage = () => {
    // const percentageValue = parseFloat(display) / 100;
    // setDisplay(percentageValue.toString());
    
     if(operator === "*"){
        const result = (prevValue * display.slice(1,display.length))/100
        setDisplay(result.toString())
    }else{
        const result = eval(prevValue.toString().concat(operator).concat((prevValue * display)/100))
        setDisplay(result.toString())
    }
    
  };

  const keyBoard = (e) => {
 
    if(numberArr.includes(e)){
        console.log(e)
        handleNumberClick(e)
    }else if (operatorArr.includes(e) && e!== "%"){
        handleOperatorClick(e)
    }else if(e == "Enter"){
        calculate()
    }else if(e === "Backspace"){
        handleClear()
    }
    else if(e === "%"){
        handlePercentage()
    }
    // console.log(e)
  }

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator" onKeyDown={(e)=>{
      keyBoard(e.key)
      }}>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={calculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
