import React from 'react';
import Card from './Card';


const CardList = ({ albums }) => {

    const cardComponent = albums.map((album,i) => {
        return (
            <Card 
                key={i} 
                id={albums[i].id} 
                name={albums[i].name} 
                year={albums[i].year} 
                tracklist={albums[i].tracklist} 
                cover={albums[i].cover} 
                url={albums[i].url} 
            />                      
        );
    })

    return(
        <div>
                {cardComponent}
        </div>
    );
}

export default CardList;