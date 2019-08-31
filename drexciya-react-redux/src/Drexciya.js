import React, { Component } from 'react';
import './Drexciya.css'
import Card from './Card';
import {albums} from './albums';

class Drexciya extends Component {
    render() {
        return ( 
            <div className="f1 tc br4 code fl w-100">
                <h3 className="calisto">DREXCIYA RESEARCH LAB</h3>
                <p className="f2 dark-blue">Slaves thrown overboard give birth underwater to the greatest warriors ever known. The Drexciyans!!</p>
                
                <Card id={albums[0].id} name={albums[0].name} year={albums[0].year} tracklist={albums[0].tracklist} cover={albums[0].cover} url={albums[0].url} />
                <Card id={albums[1].id} name={albums[1].name} year={albums[1].year} tracklist={albums[1].tracklist} cover={albums[1].cover} url={albums[1].url} />
                <Card id={albums[2].id} name={albums[2].name} year={albums[2].year} tracklist={albums[2].tracklist} cover={albums[2].cover} url={albums[2].url} />
                <Card id={albums[3].id} name={albums[3].name} year={albums[3].year} tracklist={albums[3].tracklist} cover={albums[3].cover} url={albums[3].url} />
               
                <br></br>
                <a className="code white" href="https://www.factmag.com/2010/09/09/the-essential-drexciya/"> <h3>The genius of Drexciya in 10 essential releases - by FACTmag</h3></a>
            </div>
        );
    }    
}

export default Drexciya;