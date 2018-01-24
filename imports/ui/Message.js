import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'

// Instead of using props.author or props.text ...
const Message = ({ author, text }) => (
    <div className="container">
        <span><strong>{author}</strong>: {text}</span>
    </div>
)

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message