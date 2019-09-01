import React from 'react';
import './Card.css'
import TrackListComponent from './TrackListComponent';
// import cover from './album-covers/the-quest.jpg' 

const UserCard = ({id, name, username, email}) => {  
    return (
        <div className=" f3 card tc dib br3 pa5 ma5 grow bw2 shadow-5">
            <div>
                <h5>{name}</h5>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default UserCard;