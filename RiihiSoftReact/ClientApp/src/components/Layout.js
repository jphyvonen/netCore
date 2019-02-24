import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './Footer'
import './styles/Layout.css'

export default props => (
    <div className="wrapper">
        <div className="headerWrapper">
            <NavMenu />
        </div>
        <div className="main-content">
            <Container >
                {props.children}
            </Container>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
);
