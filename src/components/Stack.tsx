import { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
}

export function Stack({ children, align = 'start' }: StackProps) {
  return (
    <div className="stack" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: `${align}` }}>
      {children}
    </div>
  );
}






