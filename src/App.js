import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      console.log('Fetching quote...');
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Quote fetched successfully:', data);
      setQuote({ text: data.content, author: data.author });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    setLoading(true);
    setError(null);
    fetchQuote();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error loading quote: {error.message}
      </p>
    );
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">- {quote.author}</p>
      <button
        id="new-quote"
        type="button"
        onClick={handleNewQuote}
      >
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
