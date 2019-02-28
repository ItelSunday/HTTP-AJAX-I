import React from 'react-router-dom';
import axios from 'axios';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        
    }
} 

ComponentDidMount() {

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
