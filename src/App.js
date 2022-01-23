import React from 'react'
import './App.css'
import { useSelector , useDispatch } from "react-redux";
import { minusnumber, plusnumber } from './actions';


const App = () => {
  const selector = useSelector((state)=> state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>React Redux</h2>
      <div className="container">
      <button onClick={ () => dispatch(plusnumber(5))}>+</button>
        <input value={selector} />
        <button onClick={ () => dispatch(minusnumber(2))}>-</button>


      </div>


    </div>
  )
}

export default App
