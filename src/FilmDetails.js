import React, { Component } from 'react';
import TMDB from "./TMDB.js";

class FilmDetails extends Component{
	render (){
		return(
			<div> 
				<h1>{this.props.filmDetails[0].overview}</h1>
			</div>)
	}
}


export default FilmDetails;

