import React from 'react'
import { connect } from 'react-redux'
import FeedBackForm from './FeedBackForm'
import FeedBackList from './FeedBackList'
import { Row, Col} from 'reactstrap'

class FeedBack extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <FeedBackForm />
                    </Col>
                </Row>
                <FeedBackList />
            </div>
        )
    }
}
export default connect()(FeedBack)