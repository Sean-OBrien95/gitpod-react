import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            isLoggedIn: true,
        }
    }

    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoadeded} />
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default NestingComponents