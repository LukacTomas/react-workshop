import { useFetch } from './hooks/useFetch.ts';


export const CharacterResult = ({ result }: { result: string }) => {
  useFetch(result);


  return (
    <>
      { /**
       *Map trough components in here
       */}
    </>
  );
};