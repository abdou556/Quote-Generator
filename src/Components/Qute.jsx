import React from 'react'
import axios from 'axios';
import './qute.css'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Qute() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    const fetchQuote = () => {
      axios.get('https://api.quotable.io/random').then((response) => {
        const { content, author } = response.data;
        setQuote(content);
        setAuthor(author);
      });
    };

    
  
    useEffect(() => {
      fetchQuote();
    }, []);
  
    const handleNewQuote = () => {
      fetchQuote();
    };


    return<>
     <div className="quote-generator">
      <div className="quote-container">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
      <button className="new-quote-button" onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
    </>
  
}
