import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Media } from 'reactstrap'
const img = require('../img/Picture2.jpg')

class Contact extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="9">
                    <Content />
                </Col>
                <Col sm="3">
                    <Media src={img} />
                </Col>
            </Row>
        )
    }
}
const Content = () => (
    <div>
        <p>Created by Juha Hyvönen</p>
        <p>+358 40 7477 312</p>
    </div>
)
export default connect()(Contact)