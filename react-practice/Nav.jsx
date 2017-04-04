import React from 'react';
import { Button, Nav, NavItem } from 'react-bootstrap';

class MainNav extends React.Component {

    render() {
        return (
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem>首頁</NavItem>
                <NavItem>關於本網站</NavItem>
            </Nav>
        );
    }
}
export default MainNav;