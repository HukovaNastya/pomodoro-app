import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "typeface-kumbh-sans";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);