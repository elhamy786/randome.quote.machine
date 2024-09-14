import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setQuote({
        text: data[0].q,
        author: data[0].a,
      });
      setLoading(false);
    } catch (fetchError) {
      setError({
        message: 'Error fetching quote. Please try again later.',
        details: fetchError.message || 'Unknown error occurred',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div id="error-message">
        <p>{error.message}</p>
        <p>{error.details}</p>
      </div>
    );
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">
        -
        {quote.author}
      </p>
      <button id="new-quote" type="button" onClick={handleNewQuote}>
        New quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text)} - ${encodeURIComponent(quote.author)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
