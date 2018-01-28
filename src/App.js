import React, { Component } from 'react';
import TMDB from "./TMDB.js";
import FilmListing from "./FilmListing.js";
import FilmDetails from "./FilmDetails.js";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieData: {}
    }
}

handleClick = (filmId) => {
      const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
      fetch(url).then(response => {
        response.json().then(data => {
        this.setState({movieData: data});
        console.log(this.state.movieData)//fuck yeah
        });
    });
};
  
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <FilmListing films={TMDB.films} handleClick={this.handleClick} />
        </div>
        <div className="film-details">
          <FilmDetails film={this.state.movieData} />
        </div>
      </div>
    );
  }
}

export default App;

