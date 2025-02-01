import { Stack } from './Stack.tsx';

interface SearchProps {
  placeholder: string;
  label: string;
}

export function Search({ label, placeholder,  }: SearchProps) {

  /*
  * Exercise (5 min)
  * Create state for the input value in the Search component
  * - Use the useState hook to create a value state
  * - Use the state value to control the input value
  * - Use the onChange event to update the value state in the input
  *   - for updating the value, use the event object (e.target.value)
  *   - use function setValue to update the state
  *   - pro tip: don't use inline functions in the onChange event
  * */
  console.log('Search rendered with label: ', label);

  return (
    <Stack align="start">
      <label>{label}</label>
      <input  type="text" placeholder={placeholder} />
    </Stack>
  );
};