import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'

import Message from './Message'

// export default class MessageContainer extends Component {
//     render() {
//         return this.props.messages.map(message => 
//             <Message key={message._id} text={message.text} author={message.author}
//         />)
//     }
// }
const MessageContainer = (props) => (props.messages.map(message => 
    <div className="message-container">
        <Message key={message._id} text={message.text} author={message.author} />
    </div>
))

MessageContainer.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
}

export default MessageContainer