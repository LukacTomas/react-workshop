import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';
import { Search } from './components/Search.tsx';
import { useState } from 'react';

/*
* Exercise (10 min)
* 1. wrap handleSearchBook, handleSearchMovie, handleSearchCar with useCallback
* - observe the console.log when typing in the search box
* - Use Profiler to see the performance difference
* - make a note what you observe
*
* 2. wrap Search with memo
* - observe the console.log when typing in the search box
* - Use Profiler to see the performance difference
* - make a note what you observe
*
* 3. remove useCallback from handleSearchBook, handleSearchMovie, handleSearchCar
* - observe the console.log when typing in the search box
* - Use Profiler to see the performance difference
* - make a note what you observe
*
* 4. add useCallback back to functions and wrap SearchResult, heading, footer with memo
* - observe the console.log when typing in the search box
* - Use Profiler to see the performance difference
* - make a note what you observe
*
* */

function App() {
  const [book, setBook] = useState('');
  const [movie, setMovie] = useState('');
  const [car, setCar] = useState('');

  const handleSearchBook = (query: string) => {
    setBook(query);
  }

  const handleSearchMovie = (query: string) => {
    setMovie(query);
  }

  const handleSearchCar = (query: string) => {
    setCar(query);
  }

  return (
    <>
      <Heading />
      <Search placeholder="My search 1" label="Book" onSearch={handleSearchBook} />
      <SearchResult result={book} />
      <Search placeholder="My search 2" label="Movie" onSearch={handleSearchMovie} />
      <SearchResult result={movie} />
      <Search placeholder="My search 3" label="Car" onSearch={handleSearchCar}/>
      <SearchResult result={car} />
      <Footer />
    </>
  )
}

function SearchResult({ result }: { result: string }) {
  return (
    <h3> {result}</h3>
  );
}

export default App
