import React from 'react';
import ReactDOM from 'react-dom/client'; // from 'react-dom' is old way and works with 2nd method of calling (old bad practice)
import './index.css';
// import Card from './Card';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from './robots'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// OLD React 17 and Under BAD PRACTICE
// ReactDOM.render(
//   <CardList robots={robots} />
// , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
