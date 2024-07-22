import { useState } from 'react'
import QuoteBox from './QuoteBox.jsx'; 

function App() {
  const [quote, setQuote] = useState({ text: "hello bro😀🔥👋", author: "jack😀👍"});

  const handleNewQuote = () => {
    setQuote({text: "hello bro😀🔥👋", author: "jack😀👍"});
  }

  return (
    <>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </>
  )
}

export default App
