import React, { Component } from 'react';
import FilmPoster from "./FilmPoster.js";

class FilmRow extends Component {
  render() {
    console.log(this.props.id);
    const year = new Date(this.props.date).getFullYear();
    return (
      <div className="film-row" onClick={this.props.handleClick.bind(this, this.props.id)} >
        <FilmPoster  img={this.props.poster} name={this.props.title} />
        <div className="film-summary">
        <h1>{this.props.title}</h1>
          <p>{year}</p>
        </div>
      </div>
    )
  }
}


export default FilmRow;

