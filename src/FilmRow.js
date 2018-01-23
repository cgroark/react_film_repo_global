import React, { Component } from 'react';

let baseURL = 'https://image.tmdb.org/t/p/w780/';

class FilmRow extends Component{
	constructor(props){
		super(props)
		this.state = {
			film: ''
		}

	this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e){
		e.preventDefault();
		this.setState({film: this.event.value})
	}
	render (){
		const allFilms = this.props.allFilms.map(f => {
			return(
			<div className="film-row"> 
				<img src ={baseURL+f.poster_path} alt=""/>
			    <h1 className="Title">
			    	{f.title}
			    </h1>
			    <p>
			    	{f.release_date}
			    </p>
			</div>
			)
		})
		return(
			<div>
				<FilmDetails filmDetails={this.state.film} />
				<input type="button" value="See Details" onClick={this.handleClick} />
   			</div>	
   		);
	}
}

export default FilmRow;
