import React from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

class FeedBackList extends React.Component {
    render() {
        return (
            <Row className="border-top mt-3">
                {this.props.Feedback.map(x =>
                    <Col key={x.id} className="col-md-3">
                        <SingleFeedback key={x.id} Name={x.name} Feedback={x.freetext} Time={x.timeGiven} />
                    </Col>)}
            </Row>
        )
    }
}
const SingleFeedback = ({ Name, Feedback, Time }) => (
    <div>
       <div style={{ fontStyle: 'italic' }}>{Feedback}</div>
       <div>-{Name}</div>
       <div>{Time}</div>
       <div><br></br></div>
    </div>
)
const mapStateToProps = (state) => {
    return { Feedback: state.Feedback }
}
export default connect(mapStateToProps)(FeedBackList)