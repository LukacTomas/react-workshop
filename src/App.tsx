import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';
import { Search } from './components/Search.tsx';
import { useCallback, useState } from 'react';

/*
Better structure of the code is the key to maintainability and scalability, performance, and readability.
*/

function App() {
  return (
    <>
      <Heading />
      <BookSearch />
      <MovieSearch />
      <CarSearch />
      <Footer />
    </>
  )
}

const BookSearch = () => {
  const [book, setBook] = useState('');
  const handleSearchBook = useCallback((query: string) => {
    setBook(query);
  }, []);
  return (
    <>
      <Search placeholder="My search 1" label="Book" onSearch={handleSearchBook} />
      <SearchResult result={book} />
    </>
  );
};

const MovieSearch = () => {
  const [movie, setMovie] = useState('');
  const handleSearchMovie = (query: string) => {
    setMovie(query);
  };
  return (
    <>
      <Search placeholder="My search 1" label="Movie" onSearch={handleSearchMovie} />
      <SearchResult result={movie} />
    </>
  );
};

const CarSearch = () => {
  const [car, setCar] = useState('');
  const handleSearchCar = (query: string) => {
    setCar(query);
  };
  return (
    <>
      <Search placeholder="My search 1" label="Car" onSearch={handleSearchCar} />
      <SearchResult result={car} />
    </>
  );
};

const SearchResult = function SearchResult({ result }: { result: string }) {
  return (
    <h3> {result}</h3>
  );
};

export default App
