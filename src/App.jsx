import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export const ACTIONS = {
      ADD_DIGIT: 'add-digit',
      CHOOSE_OPERATION: 'choose-operation',
      CLEAR: 'clear',
      DELETE_DIGIT: 'delete-digit',
      EVALUTE: 'evaluate'
}

function reducer(state, { type, payload }) {
      switch (type) {
            case ACTIONS.ADD_DIGIT:
                  if (payload.digit === "0" && state.currentOperand === "0") {
                        return state
                  }
                  if (payload.digit === "." && state.currentOperand.includes(".")) {
                        return state
                  }
                  return {
                        ...state,
                        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
                  }
      }
}

function App() {

      const [{ currentOperand, previousOperand, Operation }, dispatch] = useReducer(reducer, {})



      // ---Calculator Interface--- //

      return (
            <div className="calculator-grid">

                  {/* ---Output--- */}

                  <div className='output'>
                        <div className='previous-operand'>{previousOperand} {Operation}</div>
                        <div className='current-operand'>{currentOperand}</div>
                  </div>

                  {/* ---Buttons--- */}

                  <button className='span-two'>AC</button>
                  <button>DEL</button>
                  <OperationButton operation="÷" dispatch={dispatch} />
                  <DigitButton digit="1" dispatch={dispatch}/>
                  <DigitButton digit="2" dispatch={dispatch}/>
                  <DigitButton digit="3" dispatch={dispatch}/>
                  <OperationButton operation="*" dispatch={dispatch} />
                  <DigitButton digit="4" dispatch={dispatch}/>
                  <DigitButton digit="5" dispatch={dispatch}/>
                  <DigitButton digit="6" dispatch={dispatch}/>
                  <OperationButton operation="+" dispatch={dispatch}/>
                  <DigitButton digit="7" dispatch={dispatch}/>
                  <DigitButton digit="8" dispatch={dispatch}/>
                  <DigitButton digit="9" dispatch={dispatch}/>
                  <OperationButton operation="-" dispatch={dispatch}/>
                  <DigitButton digit="." dispatch={dispatch}/>
                  <DigitButton digit="0" dispatch={dispatch}/>
                  <button className='span-two'>=</button>
            </div>
      )
}

export default App
