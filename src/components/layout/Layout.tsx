import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <div className='h-30 mt-auto p-5 text-center align-bottom text-primary-medium opacity-40'>
        Made with ♥ by me - Black Lives Matter
      </div>
    </>
  );
}
