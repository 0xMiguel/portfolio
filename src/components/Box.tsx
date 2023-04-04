import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`box-border rounded-md border border-tertiary-200 bg-tertiary-50 p-[1rem] shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
