import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './components/top-nav-bar/top-nav-bar.css'
import './components/top-nav-bar/nav-menu-items.css'
import './components/home-page/quicklinks/quicklinks.css'
import './components/home-page/contact/contact.css' 
import './components/portfolio-page/portfolio-page.css'
import TopNavBar from './components/top-nav-bar/top-nav-bar';

ReactDOM.render(
  <React.StrictMode>
    <TopNavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
