import React from 'react';


const TrackListComponent = ({tracklist}) => {
    const trackList = tracklist.map((track,i) => { 
        return (   
         <li key={track.id}>{track.name + " - " + track.duration}</li>
        );
    }) 
            
    return(
        <div>
            <ol className="tl">
                {trackList}
            </ol>
        </div>
    );
}

export default TrackListComponent;