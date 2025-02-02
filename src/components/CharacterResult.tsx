import { useFetch } from './hooks/useFetch.ts';

/**
 * Exercise
 *
 * Hover over "data" and you should see unknown[] | null, let's fix this
 * Inspect the Response for searching in Network tab or in console.
 * Create interface Character that contains the fields as in response.
 * Pass the interface to useFetch to make the data correct type
 * Map through  data and display at least fullName and birthdate
 *
 * Pro tip: don't forget to deal with case when data is null
 * Bonus: you can use loading and error.
 *
 */

interface Character {
  index:number;
  fullName:string;
  nickname: string;
  hogwartsHouse:string;
  image:string;
  birthdate:string;
  children: string[];
  interpretedBy:string;
}

export const CharacterResult = ({ result }: { result: string }) => {
  const {data, loading, error} = useFetch<Character>(result);

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>Error: {error}</h3>
  }

  if (!data) {
    return <h3>No data</h3>
  }

  return (
    <>
      {
        data.map( character => (
          <div key={character.index}>
            <p>{character.fullName}</p>
            <p>{character.birthdate}</p>
          </div>
        ))
      }
    </>
  );
};