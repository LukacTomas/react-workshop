import { Stack } from './Stack.tsx';
import { ChangeEvent, useState } from 'react';
import { useDebounce } from './hooks/useDebounce.ts';

interface SearchProps {
  placeholder: string;
  label: string;
  onSearch?: (query: string) => void;
}

export function Search({ label, placeholder, onSearch }: SearchProps) {
  const [value, setValue] = useState<string>('');
  const debounceSearch = useDebounce( onSearch ?? console.log, 500)
  const id = 'book-search'; // TODO change this to use new hook

  console.log('Search rendered with label: ', label);

  function onHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    debounceSearch(event.target.value);
  }

  return (
    <Stack align="start">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onHandleInputChange}  type="text" placeholder={placeholder} />
    </Stack>
  );
}