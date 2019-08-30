import React, { Component } from 'react';
import './Drexciya.css'
import Card from './Card';
import {albums} from './albums';

class Drexciya extends Component {
    render() {
        return ( 
            <div className="f1 tc">
                <h1>Welcome to the Bubble Metropolis</h1>
                <Card id={albums[0].id} name={albums[0].name} year={albums[0].year} tracklist={albums[0].tracklist} />
                <Card id={albums[1].id} name={albums[1].name} year={albums[1].year} tracklist={albums[1].tracklist}/>
                <Card id={albums[2].id} name={albums[2].name} year={albums[2].year} tracklist={albums[2].tracklist}/>
                <Card id={albums[3].id} name={albums[3].name} year={albums[3].year} tracklist={albums[3].tracklist}/>
               
            </div>
        );
    }    
}

export default Drexciya;