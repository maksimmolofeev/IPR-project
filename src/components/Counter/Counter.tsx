import { useState } from 'react'
import './Counter.scss'
// import Plus from '../../assets/icons/plus.svg'
// import Minus from '../../assets/icons/minus.svg'

export const Counter = () => {
  const [value, setValue] = useState(0)
  const increment = () => {
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value - 1)
  }
  return (
    <div>
      <p data-testid='value'>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
