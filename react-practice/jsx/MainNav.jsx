import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as firebase from 'firebase';
import fbConfig from './firebaseConfig.jsx';

const  auth = firebase.auth();
const MainNav = React.createClass({
    getInitialState(){
        return {
            isUserLogin: false
        };
    },
    componentWillMount() {
        var self = this;
        auth.onAuthStateChanged(function(user){
            if(user) self.setState({isUserLogin:true});
        });
    },
    userLogOut() {
        auth.signOut().then(function(){
            window.location.href = "/";
        });
    },
    render() {
        var self = this;
        let userActionMenu = null;
        let regsiterAction = null
        if(this.state.isUserLogin){
            userActionMenu = <NavDropdown title="會員資料" id="user-action">
            <MenuItem onClick={this.userLogOut}>登出</MenuItem>
            </NavDropdown>;
        } else {
            userActionMenu = <NavItem href="./login.html">登入</NavItem>;
            regsiterAction = <NavItem href="./register.html">註冊</NavItem>;
        }
        return (
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem>首頁</NavItem>
                <NavItem>關於本網站</NavItem>
                {regsiterAction}
                {userActionMenu}
            </Nav>
        );
    }
});

export default MainNav;