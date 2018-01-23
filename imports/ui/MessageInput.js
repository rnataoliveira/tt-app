import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { Messages } from '../api/messages'

export default class MessageInput extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { text: '', author: 'José Teste'}

    handleChange(event) {
        this.setState({ text: event.target.value } )
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = event.target.value.trim()

        Messages.insert({
            text,
            owner: Meteor.userId,
            createdAt: new Date(),
            author: Meteor.user().username,
        });

        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="container">
                { this.props.currentUser ?
                    <form className="new-message" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        ref="textInput"
                        placeholder="Digite sua mensagem aqui"
                        maxLength="140"
                        value={this.state.text}
                        onChange={this.handleChange}/>
                    <button id="send-btn" className="">Enviar</button>
                </form> : ''   
                }
            </div>
        )
    }
}