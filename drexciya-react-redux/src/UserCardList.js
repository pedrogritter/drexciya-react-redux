import React from 'react';
import UserCard from './UserCard';

const UserCardList = ({ users }) => {

    const cardComponent = users.map((user,i) => {
        return (
            <UserCard 
                key={i} 
                id={users[i].id} 
                name={users[i].name} 
                username={users[i].username} 
                email={users[i].email} 
                />                      
        );
    })

    return(
        <div>
                {cardComponent}
        </div>
    );
}

export default UserCardList;