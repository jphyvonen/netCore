import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FeedBack from './components/FeedBack';
import Contact from './components/Contact'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ActionForGetAll } from './store/Feedback'

class App extends React.Component {
  componentDidMount() {
    this.props.ActionForGetAll()
  }
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/feedback' component={FeedBack} />
      </Layout>
    )
  }
}
const mapDispatchToProps = {
  ActionForGetAll
}
export default withRouter(connect(null, mapDispatchToProps)(App))
