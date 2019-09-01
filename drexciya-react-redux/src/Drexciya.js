import React, { Component } from 'react';
import './Drexciya.css'
import CardList from './CardList';
import {albums} from './albums';
import SearchBox from './SearchBox';
import UserCardList from './UserCardList'

class Drexciya extends Component {

    constructor() {
        super()
        this.state = {
            users:[],
            albums: [],
            searchField:'',
        }
    }

    componentDidMount() {
        this.setState({albums:albums});

        // USER API GET DATA
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ users: users })
    )
    }

    onSearchChange = (event) => {
        // Update SearchField with new search term
        this.setState({searchField: event.target.value})
    }  

    render() {
            // Starts with all available items & filters given search term
            console.log(this.state.users)
            console.log(this.state.albums)
            const filteredAlbums = this.state.albums.filter(albums =>{
                return albums.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            })

            if (this.state.users.length === 0) {
                return <h1>Loading</h1>
            }
            else{
            return ( 
                <div className="tc br4 code fl w-100">
                    <h3 className="f1 dark-blue">DREXCIYA RESEARCH LAB</h3>
                    <p className="f3 dark-blue">Slaves thrown overboard give birth underwater to the greatest warriors ever known. The Drexciyans!!</p>
                    <UserCardList users = {this.state.users} />
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList albums={filteredAlbums} />
                    <br></br>
                    <a className="code white" href="https://www.factmag.com/2010/09/09/the-essential-drexciya/"> <h3>The genius of Drexciya in 10 essential releases - by FACTmag</h3></a>
                    <a className="code white" href="https://daily.redbullmusicacademy.com/2017/06/drexciya-infinite-journey-to-inner-space"> <h3>In a sense, to be a Drexciya fan was to build the mythos by yourself. - Kodwo Eshun</h3></a>
                
                </div>
            );
        }
    }    
}

export default Drexciya;