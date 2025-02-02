import { useState } from 'react';
import { Search } from './Search.tsx';
import { CharacterResult } from './CharacterResult.tsx';

export const CharacterSearch = () => {
  const [person, setPerson] = useState('');

  return (
    <>
      <Search placeholder="Search for Character" label="Search Harry Potter Character" onSearch={setPerson} />
      {person && <CharacterResult result={person} /> }
    </>
  );
};