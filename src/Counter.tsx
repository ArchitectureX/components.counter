import React, { FC, useState } from 'react'
import { styles } from './styles'

type Props = {
  label: string
  decrementClick?: () => void
  incrementClick?: () => void
  spaces?: number
}

const Counter: FC<Props> = ({ label, decrementClick, incrementClick, spaces = 0 }) => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    if (count < 99) {
      if (incrementClick) {
        incrementClick()
      }

      setCount((prevCount) => prevCount + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      if (decrementClick) {
        decrementClick()
      }

      setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <div className={styles.wrapper} style={{ width: '135px' }}>
      <div className={styles.container}>
        <button
          data-action="decrement"
          className={styles.decrement}
          onClick={decrement}
        >
          <span className={styles.dash}>−</span>
        </button>
        <input
          type="number"
          className={styles.input}
          name="custom-input-number"
          value={count}
          readOnly
          style={{ paddingLeft: '10px' }}
        />
        <button
          data-action="increment"
          className={styles.increment}
          onClick={increment}
        >
          <span className={styles.add}>+</span>
        </button>
      </div>

      <span className={styles.span}>
        {label}
        {'\u00A0'.repeat(spaces)}
      </span>
    </div>
  )
}

export default Counter
