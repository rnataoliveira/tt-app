import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import MessageInput from './MessageInput'
import MessageContainer from './MessageContainer'
import Message from './Message'

import { Messages } from '../api/messages'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>TT App</h1>
                </header>
                <MessageInput />
                <MessageContainer />
            </div>
        )
    }
}


export default withTracker(() => {
    return {
        messages: Messages.find({}).fetch(),
    };
})(App)