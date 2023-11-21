import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactComponents from './ReactComponents'
import ReactState from './ReactStateInComponentTree'
import FormsInReact from './FormsInReact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let heading = React.createElement("h1",
// null,
// "Getting Started with React!!")
root.render(
  // React.createElement("h1",
  // null,
  // "Getting Started with React!")
  //heading
  <React.StrictMode>
    <ReactComponents library="React" />
    <ReactState />
    <FormsInReact />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
