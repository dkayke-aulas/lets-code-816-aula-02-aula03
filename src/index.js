import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App as Banana } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Banana />
  </React.StrictMode>,
  document.getElementById('root')
);
