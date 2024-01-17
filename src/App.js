import './App.css';
import { useEffect } from 'react';
//static variable
const API_URL='https://www.omdbapi.com?apikey=914eb925';

function App() {

  const searchMovies=async(title)=>{
      const response=await fetch(`${API_URL}&s=${title}`);

      const data=await response.json();
      console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="App">
      <h1>vfdbdfbfd</h1>
    </div>
  );
}

export default App;
