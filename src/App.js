import React, { Component } from 'react';
import logo from './logo.svg';
import TMDB from "./TMDB.js";
import FilmListing from "./FilmListing.js";
import FilmDetails from "./FilmDetails.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div><FilmListing films={TMDB.films} /></div>
        </div>

        <div className="film-details">
         <h1 className="section-title">DETAILS</h1>
         <div><FilmDetails filmDetails={TMDB.films} /></div>
        </div>
      </div>
    );
  }
}

export default App;
