import React, { Component} from 'react';

class FilmPoster extends Component{
	render(){
		const url = "https://image.tmdb.org/t/p/w780/" + this.props.img;
			return(
				<div className="film-poster">
					<img src={url} alt={this.props.name} />
				</div>
 			)
	}
}
export default FilmPoster;

