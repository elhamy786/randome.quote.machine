import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey
        }
      });
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      const data = await response.json();
      if (data && data.length > 0) {
        const randomQuote = data[0];
        setQuote({ text: randomQuote.quote, author: randomQuote.author });
      } else {
        throw new Error('No quotes available');
      }
      
      setLoading(false);
    } catch (error) {
      setError({
        message: 'Error fetching quote. Please try again later.',
        details: error.message
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
      <p>
        Error loading quote:
        {' '}
        {error.message}
      </p>
    );
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">
        -
        {' '}
        {quote.author}
      </p>
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
        tweet
      </a>
    </div>
  );
}

export default App;
