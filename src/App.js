import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './components/MoviesHeading'
import MoviesHeading from './components/MoviesHeading';
import SearchBox from './components/SearchBox';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('batman')
  const [selectedMovie, setSelectedMovie] = useState('')
  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=71cfa698`
    const response = await fetch(url)
    const responseJson = await response.json()
    if(responseJson.Search){

      setMovies(responseJson.Search)
    }
  }

  useEffect(() =>{
    getMovieRequest(searchValue)
  },[searchValue])


    const handleClick = (movie) => {
        setSelectedMovie(movie)
        }    
  return (
      <div className='container-fluid  movie-app '>
        <div className='row align-items-center m-3'>
        <MoviesHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue ={setSearchValue}/>

        </div>
        <div className='row ml-6 mr-3' >
        {movies.map((movie,index) => 
           <div className=' img-container'>
            <img  
            src={movie.Poster} 
            alt='movie'
            onClick = {() => handleClick(movie)}
            ></img>
           </div> 
    
        )}
        </div>
        <div className='details'>
        <MovieDetails movie={selectedMovie}/>
        </div>
      </div>
  );
}

export default App;
