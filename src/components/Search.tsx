import { Stack } from './Stack.tsx';
import { ChangeEvent, useState } from 'react';

interface SearchProps {
  placeholder: string;
  label: string;
}

export function Search({ label, placeholder,  }: SearchProps) {
  const [value, setValue] = useState<string>('');

  console.log('Search rendered with label: ', label);

  function onHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Stack align="start">
      <label>{label}</label>
      <input value={value} onChange={onHandleInputChange}  type="text" placeholder={placeholder} />
    </Stack>
  );
}