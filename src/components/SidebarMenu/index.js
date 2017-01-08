import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';

const SidebarMenu = (props) => {
	return(
        <div className="col-xs-2 col-sm-3 col-md-2 sidebar">
            <Nav className="nav-sidebar" bsStyle="pills" stacked onSelect={props.onSelect} >
				<NavItem eventKey={1} href="/">NavItem 1 content</NavItem>
				<NavItem eventKey={2} href="/product">NavItem 2 content</NavItem>
				<NavItem eventKey={3} href="/login">NavItem 3 content</NavItem>
			</Nav>
        </div>)
}

export default SidebarMenu;