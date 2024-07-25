import React, { useEffect, useRef, useState } from "react";

const RandomeQuote = () => {
  const quotesRef = useRef([]);
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function displayQuote() {
    const randomIndex = randomIntFromInterval(0, quotesRef.current.length);
    const randomQuote = quotesRef.current[randomIndex];
    console.log("display random quote", randomQuote);
    setQuote(randomQuote.quote);
    setQuoteAuthor(randomQuote.author);
  }

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data received", data);
        quotesRef.current = data.quotes;
        displayQuote();
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {quoteAuthor}</div>
      <button id="new-quote" onClick={displayQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote
        )} - ${encodeURIComponent(quoteAuthor)}`}
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default RandomeQuote;
