import React, { Component } from 'react';
import FilmRow from "./FilmRow.js";

class FilmListing extends Component{
	render (){
		
		const allFilms = this.props.films;
		return(
			<div> 
				<h4><FilmRow allFilms={allFilms} /></h4>
			</div>
		)}
}

export default FilmListing;
