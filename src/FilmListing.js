import React, { Component } from 'react';
import FilmRow from "./FilmRow.js";

class FilmListing extends Component{
	render(){
		const allFilms = this.props.films.map(film => {
			return(
				<FilmRow id={film.id} title={film.title} poster={film.poster_path} date={film.release_date} handleClick={this.props.handleClick} />
			);
		})
		return(
			<div>
				<h1 className="section-title">Top Films of 2017</h1>
				{allFilms}
			</div>
		);
	}
}

export default FilmListing;
