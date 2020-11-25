import React from 'react';
import ReactDOM from 'react-dom';

// Importing Sass with Bootstrap CSS
import './css/scss/App.scss';
import './css/index.css';

//import 'bootstrap/dist/css/bootstrap.min.css';


import App from './components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
     <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
