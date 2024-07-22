
function QuoteBox (props = { quote, handleNewQuote}) {
    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <button id="new-quote">new quote</button>
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" >tweet</a>
        </div>
    );
}

export default QuoteBox;