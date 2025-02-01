import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';
import { Search } from './components/Search.tsx';
import { useState } from 'react';

/*
* Exercise (10 min)
* Create 3 states in the App component
*   - for book, movie, and car
* Create 3 functions to update the states
*  - handleSearchBook, handleSearchMovie, handleSearchCar
*
* Update the Search component to accept the onSearch prop
*  - update interface to include onSearch prop
*  - onSearch should be a function that accepts a string
*  - call the onSearch function with the input value
*
* Update the App component
* - pass the onSearch function to the Search component
*
* Use SearchResult component to display the result for each search
*
* Bonus:
* Observe the console logs in the Search component
* Try Profiler with React DevTools
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
