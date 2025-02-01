import { memo } from 'react';

export const Heading = memo(function Heading() {
  console.log('Heading rendered');
  return <h1 className="header">React Workshop</h1>
});