import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import MessageInput from './MessageInput'
import MessageContainer from './MessageContainer'
import Message from './Message'

import { Messages } from '../api/messages'
import AccountUIWrapper from './AccountsUIWrapper'

const App = (props) => (
    <div className="container">
        <header>
            <h1>Messages App</h1>
        </header>
        <AccountUIWrapper />
        <MessageInput currentUser={props.currentUser} />
        <MessageContainer messages={props.messages}/>
    </div>
)

export default withTracker(() => {
    Meteor.subscribe('messages')

    return {
        messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user(),
    };
})(App)