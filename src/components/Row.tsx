import { ReactNode } from 'react';

export function Row({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
      {children}
    </div>
  );
}

