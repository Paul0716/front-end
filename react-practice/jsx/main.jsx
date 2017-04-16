import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MainNav from './MainNav.jsx';

ReactDOM.render(<MainNav/>, document.getElementsByTagName("nav")[0]);
ReactDOM.render(<App/>, document.getElementById("app"));

