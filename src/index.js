import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './car.js';
import Contact from './contacts.js';
import AddScenario from './components/AddScenario.js';
import Garage from './Garage.js';
import Scenario from './Scenario.js';



//import Testme from './test.js';


ReactDOM.render(<Scenario />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
