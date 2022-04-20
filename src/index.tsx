import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './top-nav-bar/top-nav-bar.css'
import './top-nav-bar/nav-menu-items.css'
import './pages/home/components/main/quicklinks/quicklinks.css'
import './pages/home/components/main/contact/contact.css' 
import './pages/home/components/about/about.css'
import './pages/home/home.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
