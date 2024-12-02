import React from 'react';
import { clsx } from 'clsx';

export const Badge = ({ children, className }) => {
  return (
    <span 
      className={clsx(
        "px-2 py-1 text-xs font-semibold rounded-full shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
};