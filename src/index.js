import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// CHALLENGE: make this app work by applying what you have learnt
// 1. when new text is written into the input, its state should be saved.
// 2. when the add button is pressed the current data in the input should be added to an array.
// 3. The <ul> should display all the array items as <li>s 