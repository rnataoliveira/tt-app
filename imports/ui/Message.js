import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

export default class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <p>{this.props.text}</p>
                <span>{this.props.author}</span>
            </div>
        )
    }
}