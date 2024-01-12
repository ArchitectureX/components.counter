# @architecturex/components.counter

## Counter

The Counter component is a customizable React component that provides a simple numeric counter functionality. It includes increment and decrement buttons, and displays a count value. This component is highly customizable with various props, making it suitable for different use cases where a numeric counter is needed.

### Installation

`npm install @architecturex/components.counter`

### Usage

```javascript
import React from 'react'
import Counter from '@architecturex/components.counter'

function App() {
  return (
    <div>
      <Counter
        label="Quantity"
        incrementClick={() => console.log('Incremented')}
        decrementClick={() => console.log('Decremented')}
        spaces={2}
      />
    </div>
  )
}

export default App
```

### Props

- **label**: The label displayed next to the counter
- **decrementClick:** Callback function for the decrement button
- **incrementClick:** function Callback function for the increment button
- **spaces:** Number of spaces between label and counter

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing this component. Your feedback and contributions are welcome!
