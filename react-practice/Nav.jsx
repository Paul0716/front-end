import React from 'react';
import { Button, Nav, NavItem } from 'react-bootstrap';

class MainNav extends React.Component {

    render() {
        return (
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem>NavItem 1 content</NavItem>
                <NavItem>NavItem 2 content</NavItem>
            </Nav>
        );
    }
}
export default MainNav;