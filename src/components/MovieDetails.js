import React from 'react';
import '../App.css'
const MovieDetails = (props) => {
    console.log(props.movie)
    return (
        <div id='detail' style={Boolean(props.movie) ? {display: "block"}
        : {display: "none"}    
        }>
            <h1  >Movie Details</h1>
            <div id='content'>
            <h3>Title</h3>
            <p>{props.movie.Title}</p>
            <h3>Year</h3>
            <p>{props.movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieDetails