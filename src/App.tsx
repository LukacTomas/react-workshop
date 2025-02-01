import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';
import { Search } from './components/Search.tsx';
import { useState } from 'react';

function App() {
  return (
    <>
      <Heading />
      <MovieSearch />
      <MovieSearch />
      <MovieSearch />
      <Footer />
    </>
  )
}


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
const SearchResult = function SearchResult({ result }: { result: string }) {
  return (
    <h3> {result}</h3>
  );
};

export default App
