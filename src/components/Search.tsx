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

  console.log('Search rendered with label: ', label);

  function onHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    debounceSearch(event.target.value);
  }

  return (
    <Stack align="start">
      <label>{label}</label>
      <input value={value} onChange={onHandleInputChange}  type="text" placeholder={placeholder} />
    </Stack>
  );
}