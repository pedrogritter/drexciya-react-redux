import React from 'react';
// import cover from './album-covers/the-quest.jpg' 

const Card = ({id, name, year, cover, tracklist}) => {
    return (
        <div className="card tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={cover} alt="cover"/> 
            <div>
                <h2>{name}</h2>
                <p>{year}</p>
                <p>{tracklist}</p>
            </div>
        </div>
    )
}

export default Card;