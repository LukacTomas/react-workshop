import './App.css';
import { Heading } from './components/Heading.tsx';
import { Footer } from './components/Footer.tsx';

function App() {

  return (
    <>
      <Heading />
      {/*
        Exercise (5 min):
        - Create a new component called Search in the components folder
        - It should accept a placeholder and label prop (both strings)
        - It should render an input with the placeholder prop and label with the label prop
          - The input should be of type text
          - It should use the Stack component to render the label and input
          - tip: don't  forget to export the component :)
        - Use the Search component three times in the App component (here) / try with uncommenting the code below
        - Each time, pass a different placeholder and label prop


      */}

      {/*<Search placeholder="My search 1" label="Book" />*/}
      <Footer />
    </>
  )
}

export default App
