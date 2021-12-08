import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const template = <MemoryRouter>
<App />
</MemoryRouter>;
ReactDOM.render(
  template,
  document.getElementById('root')
);


