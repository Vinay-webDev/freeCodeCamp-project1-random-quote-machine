import { useState } from 'react'
import QuoteBox from './QuoteBox.jsx'; 

function App() {
  const [quote, setQuote] = useState();

  const handleNewQuote = () => {
    
  }

  return (
    <>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </>
  )
}

export default App
