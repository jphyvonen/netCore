import React from 'react'
import { ActionForCreating, ActionForGetAll } from '../store/Feedback'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

class FeedBackForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            freeText: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log("once?")
        const newFeedBack = {
            name: this.state.name,
            email: this.state.email,
            freetext: this.state.freeText
        }
        this.props.ActionForCreating(newFeedBack)

        this.setState({
            name: '', email: '', freeText: ''
        })
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" onChange={this.handleChange} value={this.state.email} name={'email'} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label>
                    <Input onChange={this.handleChange} value={this.state.name} name={'name'} required />
                </FormGroup>
                <FormGroup>
                    <Label>Free speech</Label>
                    <Input type="textarea" onChange={this.handleChange} value={this.state.freeText} name={'freeText'} required/>
                </FormGroup>
                <Button type="submit">Submit feedback</Button>
            </Form >
        )
    }
}
const mapDispatchToProps = {
    ActionForCreating,
    ActionForGetAll
}
export default connect(null, mapDispatchToProps)(FeedBackForm)