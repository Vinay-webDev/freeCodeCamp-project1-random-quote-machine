import React, { useState } from 'react';

const quotesList = [{text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "– Oscar Wilde"},
{text: "That it will never come again is what makes life so sweet.", author: "– Emily Dickinson"},
{text: "It is never too late to be what you might have been.", author: "– George Eliot"},
{text: "Pain is inevitable. Suffering is optional.", author: "– Haruki Murakami"},
{text: "Be kind, for everyone you meet is fighting a hard battle.", author: "– Plato"},
{text: "Self-awareness and self-love matter. Who we are is how we lead.", author: " – Brene Brown"}
]
//-----------------------------------------//
/* you can also use another function for generating random index then put that function to the setter setQuote */
const randomIndex = () => Math.floor(Math.random() * quotesList.length); 
/*
function randomIndex () {
    Math.floor(Math.random() * quotesList.length);
}*/

//----------------------------------------//
function QuoteBox (props = { quote, handleNewQuote }) {

    const [quote, setQuote] = useState(quotesList[0]);

    const handleNewQuote = () => {
        /*setQuote(quotesList[Math.floor(Math.random()* quotesList.length)])*/
        setQuote(quotesList[randomIndex()]);
    }

    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <div className="actions">
                <button id="new-quote" class="button" onClick={handleNewQuote} >new quote</button>
                <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top" >tweet</a>
            </div>          
        </div>
    );
}

export default QuoteBox;