import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import MessageInput from './MessageInput'
import MessageContainer from './MessageContainer'
import Message from './Message'

import { Messages } from '../api/messages'
import AccountUIWrapper from './AccountsUIWrapper'

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
                <AccountUIWrapper />
                <MessageInput />
                <MessageContainer messages={this.props.messages}/>
            </div>
        )
    }
}


export default withTracker(() => {
    return {
        messages: Messages.find({}, { sort: { createdAd: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(App)