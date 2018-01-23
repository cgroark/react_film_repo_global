import React, { Component } from 'react';

class FilmListing extends Component{
	render (){
		let allFilms = this.props.films.map( film => {
			return <p>{film.title}</p>
		});
		return(
			<div> 
				<h1>{allFilms}</h1>
			</div>
		)}
}

export default FilmListing;

