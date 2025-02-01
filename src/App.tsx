import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';
import { Search } from './components/Search.tsx';

function App() {

  return (
    <>
      <Heading />
      <Search placeholder="My search 1" label="Book" />
      <Search placeholder="My search 2" label="Movie" />
      <Search placeholder="My search 3" label="Car" />
      <Footer />
    </>
  )
}

export default App
