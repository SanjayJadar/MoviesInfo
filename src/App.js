import React, { useEffect, useState } from "react";
import MoviesList from './components/MoviesList';  
import './index.css';
import axios from 'axios'; 
import './App.css';
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]); 

  const [search, setSearch] = useState('');

  const [orignalData, setOringnalData] = useState([]);

  // Feach Movies
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716');
        setData(response.data.results);
        setOringnalData(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
    fetchApi();
  }, []);


  // Search for new Movies from new API
  useEffect(()=>{ 
    if(search){
      const fetchApi = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cfe422613b250f702980a3bbf9e90716`);
          setData(response.data.results);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      } 
      fetchApi();
    } 
  }, [search])


  // Search for Movies from present API
  // useEffect(()=>{
  //     setData(orignalData.filter(item=>item.original_title.toLowerCase().includes(search.toLowerCase())));
  // },[search])


  return (
    <div className="bg-gray-900"> 
          <Search search={search} setSearch={setSearch}/>
          <div className="grid grid-cols-8 gap-8 p-8">
            {data.map((item, index) => (  
              <div key={index}>
                  <MoviesList {...item} /> 
              </div>
            ))}
          </div>
    </div>  
  );
}

export default App;
