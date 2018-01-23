import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import Message from './Message'

export default class MessageContainer extends Component {
    render() {
        return this.props.messages.map(message => 
            <Message key={message._id} text={message.text} author={message.author}
        />)
    }
}