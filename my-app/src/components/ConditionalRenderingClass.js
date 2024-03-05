import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            isLoadeded: true,
            isLoggedIn: true,
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.isLoadeded ? 'Data Loaded' : 'Loading...'}</h1>
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Welcome to site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subcribe to newletter</li>
                        </ol>
                    </div>
                ) : (<p>Please sign in...</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass