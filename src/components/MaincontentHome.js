import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'; 
import './MaincontentHome.css';

class MaincontentHome extends Component {
	render() {
		return (
            <Container>
            <Row className="justify-content-md-center">
               <Col md="auto" className="mainbox" >BizX demo project</Col>
            </Row>
            </Container>
);
}
}

export default MaincontentHome;