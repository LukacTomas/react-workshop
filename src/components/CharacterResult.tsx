import { useFetch } from './hooks/useFetch.ts';
import { Card, CardContent, CardHeading, CardImage } from './Card.tsx';

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
          <Card key={character.index}>
            <CardHeading heading={character.fullName} />
            <CardContent>
              <p><b>birthdate:</b> {character.birthdate}</p>
              <p><b>house:</b> {character.hogwartsHouse}</p>
              <p><b>nickname:</b> {character.nickname}</p>
            </CardContent>
            <CardImage src={character.image} alt={character.fullName} />
          </Card>
        ))
      }
    </>
  );
};