import React from 'react';
import { Button, Nav, NavItem } from 'react-bootstrap';

class App extends React.Component {

    render() {
        return (
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey="3">NavItem 3 content</NavItem>
            </Nav>
        );
    }
}
export default App;