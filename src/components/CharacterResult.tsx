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

export const CharacterResult = ({ result }: { result: string }) => {
  const {data, loading, error} = useFetch(result);
  console.log(data);
  console.log(loading);
  console.log(error);


  return (
    <>
      { /**
       *Map trough components in here
       */}
    </>
  );
};