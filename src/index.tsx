import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './top-nav-bar/top-nav-bar.css'
import './top-nav-bar/nav-menu-items.css'
import './pages/home/components/quicklinks/quicklinks.css'
import './pages/contact/components/contact.css' 
import './pages/home/home.css';
import './pages/portfolio/portfolio.css'
import './pages/contact/contact-page.css'
import './pages/portfolio/components/portfolio-item/portfolio-item.css'
import './pages/resume/resume.css'

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
