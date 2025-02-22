import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header'; /* Fair chance we may just end up whacking this back into app*/
import Footer from './Footer'; /* Fair chance we may just end up whacking this back into app*/
import Navbar from './Navbar'; /* Fair chance we may just end up whacking this back into app*/
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar selected="Home"/>
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
