import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <div className='mt-auto text-center align-bottom'>
        Made with ❤️ by me - Black Lives Matter
      </div>
    </>
  );
}
