import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Menu extends Component {
	state = {
	    collapse: false,
	    isWideEnough: false,
    };

     onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

	render(){
      return (
      		<Router>
                <Navbar color="stylish-color-dark" dark expand="md" fixed="top" scrolling >
                    <NavbarBrand href="/" style={{marginLeft: "7%"}}>
                        <strong>TIshoes.com</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar style={{marginRight:"7%"}}>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#" onClick={() => this.props.pilihmenu('home')}>Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#" onClick={() => this.props.pilihmenu('feature')} >Features</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Pricing</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Others</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#"></DropdownItem>
                                    <DropdownItem href="#"></DropdownItem>
                                    <DropdownItem href="#"></DropdownItem>
                                    <DropdownItem href="#"></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input onChange={this.props.searchchange} className="form-control mr-sm-2 mb-0 text-white"type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
      ) 
	}
} 

export default Menu;