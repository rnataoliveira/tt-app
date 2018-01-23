import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { Messages } from '../api/messages'

export default class MessageInput extends Component {
    constructor() {
        super()
    }

    state = { text: '', author: 'José Teste'}

    handleChange(event) {
        this.setState({ text: event.target.value } )
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = event.target.value

        let self = this

        // Calling the method from server side
        Meteor.call('messages.insert', text, (error, success) => {
            error ? console.log(error) : self.setState({ text: '' })
        })
    }

    render() {
        return (
            <div className="container">
                {/* { this.props.currentUser ? */}
                    <form className="new-message" onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type="text"
                        ref="textInput"
                        placeholder="Digite sua mensagem aqui"
                        maxLength="140"
                        value={this.state.text}
                        onChange={this.handleChange.bind(this)}/>
                    <button id="send-btn" className="">Enviar</button>
                </form>
                 {/* : ''   
                } */}
            </div>
        )
    }
}