import React, { useState } from 'react';

const quotesList = [{text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "– Oscar Wilde"},
{text: "That it will never come again is what makes life so sweet.", author: "– Emily Dickinson"},
{text: "It is never too late to be what you might have been.", author: "– George Eliot"},
{text: "Pain is inevitable. Suffering is optional.", author: "– Haruki Murakami"},
{text: "Be kind, for everyone you meet is fighting a hard battle.", author: "– Plato"},
{text: "Self-awareness and self-love matter. Who we are is how we lead.", author: " – Brene Brown"}
]

function QuoteBox (props = { quote, handleNewQuote}) {

    const [quote, setQuote] = useState({text: "hello bro😀🔥👋", author: "jack😀👍"});

    const handleNewQuote = () => {

    }

    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <button id="new-quote" onClick={handleNewQuote} >new quote</button>
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" >tweet</a>
        </div>
    );
}

export default QuoteBox;