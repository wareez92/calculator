import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function reducer(state, action) {

}

function App() {

      const [{ currentOperand, previousOperand, Operation}, dispatch] = useReducer(reducer,{})

// Calculator Interface

  return (
        <div className="calculator-grid">

              {/* ---Output--- */}

              <div className='output'>
                  <div className='previous-operand'></div>
                  <div className='current-operand'></div>
              </div>

              {/* ---Buttons--- */}

              <button className='span-two'>AC</button>
              <button>DEL</button>
              <button>÷</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>*</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
              <button>.</button>
              <button>0</button>
              <button className='span-two'>=</button>
        </div>
  )
}

export default App
