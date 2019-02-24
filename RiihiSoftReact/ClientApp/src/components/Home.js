import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Media } from 'reactstrap'
import './styles/Home.css'
const imgReact = require('../img/React.png')
const Home = props => (
  <Row>
    <Col sm="9" >
      <Content />
    </Col>
    <Col sm="3" className="alignRight">
      <Media src={imgReact}></Media>
    </Col>
  </Row>
)
const Content = () => (
  <div>
    <p>The frontend for this demo application has been produced using <strong>React</strong> and <strong>Redux</strong></p>
    <p>In addition the following libraries have been used to write the application:</p>
    <p><strong>Thunk</strong> middleware is used in order to return functions from the Redux action creators</p>
    <p><strong>Axios</strong> has been used as the Http library</p>
    <p><strong>reactstrap</strong> for styles, a bootstrap implementation for React</p>
    <p><strong>React router</strong> for SPA routing</p>
    <br></br>
    <p>The backend is an <strong>ASP.NET Core</strong> web api with:</p>
    <p><strong>Entity framework</strong> and</p>
    <p><strong>MS SQL LocalDB</strong></p>
  </div>
)
export default connect()(Home);
