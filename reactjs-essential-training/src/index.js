import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let heading = React.createElement("h1",
// null,
// "Getting Started with React!!")

function Header(props) {
  console.log(props);
  return (
    <header><h1>{props.name}'s Kitchen</h1></header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food.</p>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}.</p>
    </footer>
  )
}

root.render(
  // React.createElement("h1",
  // null,
  // "Getting Started with React!")
  //heading
  <React.StrictMode>
    <Header name="Cindy" />
    <Main adjective="amazing" />
    <Footer year={new Date().getFullYear()}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
