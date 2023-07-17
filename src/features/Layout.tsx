import * as React from 'react';
type LayoutProps = {
  children: React.ReactNode;
  loading?: boolean;
};

const Layout = ({ children, loading }: LayoutProps) => {
  return (
    <div className='flex h-screen flex-col '>
      {loading ? (
        <>
          <div className='mt-10 flex h-full items-center justify-center'>
            loading...
          </div>
        </>
      ) : (
        <article className='flex h-screen flex-grow flex-col '>
          <main className='grid flex-grow grid-cols-[1fr_minmax(0px,1280px)_1fr] gap-6 gap-y-8'>
            {/* todo: remove before deploy*/}
            <section className='col-start-2 content-start gap-4 gap-y-8 '>
              {children}
            </section>
          </main>
        </article>
      )}
    </div>
  );
};

export default Layout;
