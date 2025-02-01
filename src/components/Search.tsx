import { Stack } from './Stack.tsx';
import { ChangeEvent, memo, useState } from 'react';

interface SearchProps {
  placeholder: string;
  label: string;
  onSearch?: (query: string) => void;
}

export const Search = memo( function Search({ label, placeholder, onSearch }: SearchProps) {
  const [value, setValue] = useState<string>('');

  console.log('Search rendered with label: ', label);

  function onHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onSearch?.(event.target.value);
  }

  return (
    <Stack align="start">
      <label>{label}</label>
      <input value={value} onChange={onHandleInputChange}  type="text" placeholder={placeholder} />
    </Stack>
  );
});