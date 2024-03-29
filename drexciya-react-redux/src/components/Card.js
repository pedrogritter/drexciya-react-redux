import React from 'react';
import './Card.css'
import TrackListComponent from './TrackListComponent';
// import cover from './album-covers/the-quest.jpg' 

const Card = ({id, name, year, cover, tracklist, url}) => {  
    return (
        <div className=" f3 card tc dib br3 pa5 ma5 grow bw2 shadow-5">
            <a href={url} ><img src={cover} alt="cover"/></a>   
            <div>
                <h5>{name}</h5>
                <p>{year}</p>
                <TrackListComponent tracklist={tracklist} />
            </div>
        </div>
    )
}

export default Card;