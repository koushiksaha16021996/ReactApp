import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Operation from './exam/Operation'
import App from  './App'
import {Provider} from 'react-redux'
import {store} from './Redux'
import Parentcounter from './counter/Parentcounter'
import Newapp from './Newapp'
import StudentDetailsParent from './StudentDetails/StudentsDetailsParent'
import Tic_tac_toe from './Tic_tac_toe'

ReactDOM.render(
  <React.StrictMode>
   <Tic_tac_toe/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
