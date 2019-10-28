import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap'; 
import './Home.css';

class NavbarHome extends Component {
	render() {
		return (
        <Navbar default collapseOnSelect>
        <Navbar.Brand href="#home" className="demo-project">Demo project</Navbar.Brand>
        <Navbar.Toggle />
        <div id="brand-image"><Image src="http://placehold.it/120x30&amp;text=120 x 30" /></div>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             <a href="#home" className="home">Home</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
       
		);
	}
}

export default NavbarHome;

