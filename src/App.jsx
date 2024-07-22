import { useState } from 'react'
import QuoteBox from './QuoteBox.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteBox/>
    </>
  )
}

export default App
