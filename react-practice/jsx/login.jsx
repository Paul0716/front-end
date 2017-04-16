import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm.jsx';
import MainNav from './MainNav.jsx';

ReactDOM.render(<MainNav/>, document.getElementsByTagName("nav")[0]);
ReactDOM.render(<LoginForm/>, document.getElementById("app"));