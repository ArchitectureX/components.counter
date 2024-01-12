import React, { FC, useState } from 'react'
import cx from '@architecturex/utils.cx'

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
    <div className="custom-number-input h-10 flex items-center w-[135px]">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={count}
          readOnly
          style={{ paddingLeft: '10px' }}
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>

      <span className="ml-2">
        {label}
        {'\u00A0'.repeat(spaces)}
      </span>
    </div>
  )
}

export default Counter
