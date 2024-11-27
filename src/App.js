
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Movies from './pages/movies/Movies';
import { RouterProvider, createHashRouter, createRoutesFromElements ,Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Tvshow from './pages/TvShow/Tvshow';
import Contact from './pages/Contact/Contact';

//http://www.omdbapi.com/?s=star%20wars&apikey=d7d275b8
function App() {
  const [myMovies,setMyMovies]=useState([])


  useEffect(()=>{
    fetchmovieshandler()
    console.log(myMovies)
    
  },[])

  async function fetchmovieshandler(){
    const res=await fetch('http://www.omdbapi.com/?s=star%20wars&apikey=d7d275b8');
    const data=await res.json();
    const datatransformed=data.Search.map((item)=>{
      return{
        id:item.imdbID,
        title:item.Title,
        poster:item.Poster,
        year:item.Year,
        type:item.Type,
      }
    })
    setMyMovies(datatransformed);
    console.log(myMovies)
  }
 

const routes= createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home moviesitem={myMovies}/>}/>
      <Route path='/movies' element={<Movies movieitem={myMovies}/>} />
      <Route path='/tv' element={<Tvshow tvitem={myMovies}/>} />

    </Route>
  )
)
  return (
    // <Home moviesitem={myMovies}/>
    <RouterProvider router={routes}/>
  );
}

export default App;
