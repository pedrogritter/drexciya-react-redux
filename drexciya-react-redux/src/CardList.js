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
                cover={albums[i].cover} 
                url={albums[i].url} 
                tracklist={albums[i].tracklist}
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