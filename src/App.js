import React, { useState, useEffect } from 'react';
import './App.css';

const API_NINJAS_KEY = 'Td2AHmV3bbhQxP61BKzqqg==q4QXrkQfVteEKmyu';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        headers: {
          'X-Api-Key': API_NINJAS_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setQuote({
        text: data[0].quote,
        author: data[0].author || 'Unknown',
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
    setLoading(true);
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
