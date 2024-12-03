import React from 'react';

interface ChipsProps {
  children: React.ReactNode;
  color?: string;
}

function Chips({ children, color = 'red' }: ChipsProps) {
  return (
    <span className={`bg-${color} me-2 rounded-full px-2.5 py-1 text-xs font-bold text-white`}>
      {children}
    </span>
  );
}

export default Chips;
