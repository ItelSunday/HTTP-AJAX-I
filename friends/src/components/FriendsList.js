import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
    }
} 

componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then (response => {
            this.setState ({ friends: response.data });
        })
        .catch(error => {
            console.error('Server Error', error)
        })
}

render() {
    return (
        <div>
            {this.state.friends.map(friend => (
                <FriendInfo key={friend.id} friend={friend} />
            ))}
        </div>
        )
    }
}

function FriendInfo({ name, age, email }) {
    return (
        <div>
            <h2> {name} </h2>
            
            <div>
                Age: {age}
            </div>

            <div>
                Email: {email}
            </div>

        </div>
    )
} 