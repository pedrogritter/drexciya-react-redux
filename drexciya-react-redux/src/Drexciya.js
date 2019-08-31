import React, { Component } from 'react';
import './Drexciya.css'
import CardList from './CardList';
import {albums} from './albums';
import SearchBox from './SearchBox';


class Drexciya extends Component {

    constructor() {
        super()
        this.state = {
            albums: albums,
            searchField:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        const filteredAlbums = this.state.albums.filter(albums =>{
            return albums.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredAlbums);
    }  

    render() {

        const filteredAlbums = this.state.albums.filter(albums =>{
            return albums.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return ( 
            <div className="f1 tc br4 code fl w-100">
                <h3 className="">DREXCIYA RESEARCH LAB</h3>
                <p className="f3 dark-blue">Slaves thrown overboard give birth underwater to the greatest warriors ever known. The Drexciyans!!</p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList albums={filteredAlbums} />
                <br></br>
                <a className="code white" href="https://www.factmag.com/2010/09/09/the-essential-drexciya/"> <h3>The genius of Drexciya in 10 essential releases - by FACTmag</h3></a>
            </div>
        );
    }    
}

export default Drexciya;