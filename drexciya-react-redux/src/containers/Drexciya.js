import React, { Component } from 'react';
import './Drexciya.css'
import CardList from '../components/CardList';
import {albums} from '../albums';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class Drexciya extends Component {

    constructor() {
        super()
        this.state = {
            albums: albums,
            searchField:''
        }
    }

    onSearchChange = (event) => {
        // Update SearchField with new search term
        this.setState({searchField: event.target.value})
    }  

    render() {
        const{albums, searchField} = this.state;

        // Starts with all available items & filters given search term
        const filteredAlbums = albums.filter(album =>{
            return album.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !albums.length ? 
            <h1 className="white">Loading</h1> :
            ( 
            <div className="tc br4 code fl w-100">
                <h3 className="f1 dark-blue">DREXCIYA RESEARCH LAB</h3>
                <p className="f3 dark-blue">Slaves thrown overboard give birth underwater to the greatest warriors ever known. The Drexciyans!!</p>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList albums={filteredAlbums} />
                    </ErrorBoundry>
                </Scroll>
                <br></br>
                <br></br>
                <a className=" f2 code white" href="https://www.factmag.com/2010/09/09/the-essential-drexciya/"> <h3>The genius of Drexciya in 10 essential releases - by FACTmag</h3></a>
                <a className="f2 code white" href="https://daily.redbullmusicacademy.com/2017/06/drexciya-infinite-journey-to-inner-space"> <h3>In a sense, to be a Drexciya fan was to build the mythos by yourself. - Kodwo Eshun</h3></a>
            
            </div>
        );
    }    
}

export default Drexciya;