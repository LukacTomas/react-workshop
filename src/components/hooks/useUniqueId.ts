/**
 * Exercise: (5 min.)
 *
 * Create a custom React hook called useUniqueId that accepts a prefix string as an argument.
 * Increment the counter each time the hook is called to generate a new id.
 *
 * Pro tip: Think about whether to use useState or useRef and why.
 */

import { useState } from 'react';

let id = 0;

export const useUniqueId = (prefix: string) => {
  const [state] = useState(id++);

  return `${prefix}-${state}`;
};

