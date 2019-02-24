import React from 'react'
import { connect } from 'react-redux'
import './styles/Footer.css'

class Footer extends React.Component {

    render() {

        const user = 'jupe.hyvonen', domain = 'gmail.com'
        return (
            <div className="styles">
                <p>&copy;Juha Hyvönen</p>
                {`${user}@${domain}`}
            </div>
        )
    }
}
export default connect()(Footer)
