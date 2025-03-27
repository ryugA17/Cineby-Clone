import MovieCard from "../components/MovieCard"
import {useState} from 'react'
function Home() {
    const [search, setSearch] = useState('');
    const movies = [
        {id: 1, title: 'The Godfather', director: 'Francis Ford Coppola'},
        {id: 2, title: 'Star Wars', director: 'George Lucas'},  
        {id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont'},
        {id: 4, title: 'Forrest Gump', director: 'Robert Zemeckis'},
        {id: 5, title: 'The Dark Knight', director: 'Christopher Nolan'},
    ];
    
const handleSearch = (e) => {
    e.preventDefault()
    alert(search)

};
    
  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie" 
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            
            />
            <button type="submit" className="search-btn">Search
            </button>
            </form>
            
      <div class name="movie-list"> 
        {movies.map(
          (movie) => 
           
            movie.title.toLowerCase().startsWith(search) && (
          <MovieCard movie={movie} key = {movie.id} /> 
        
        )
        )}
       
            
        
      </div>
    </div>
  );

}
export default Home;