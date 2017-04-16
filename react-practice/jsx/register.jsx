import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm.jsx';
import MainNav from './MainNav.jsx';

ReactDOM.render(<MainNav/>, document.getElementsByTagName("nav")[0]);
ReactDOM.render(<RegisterForm/>, document.getElementById("app"));