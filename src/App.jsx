import { useState } from 'react'
import QuoteBox from './QuoteBox.jsx'; 

function App() {
  

  return (
    <>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </>
  )
}

export default App
