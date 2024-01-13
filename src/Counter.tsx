import React, { FC, useState, CSSProperties } from 'react'
import { styles } from './styles'

type Props = {
  label: string
  onChange?: (value: number) => void
  spaces?: number
  style?: CSSProperties
}

const Counter: FC<Props> = ({ label, spaces = 0, onChange, style = { width: '135px' } }) => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    if (count < 99) {
      setCount((prevCount) => prevCount + 1)
      onChange && onChange(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
      onChange && onChange(count - 1)
    }
  }

  return (
    <div className={styles.wrapper} style={style}>
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
