/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/features/Layout';
import Seo from '@/features/Seo';

const DmWeedPage = () => {
  return (
    <Layout>
      <Seo templateTitle='dmWeed' />
      <main>
        <section>
          <div className='layout mt-4 flex min-h-screen flex-col'>
            <Link href='/'>
              <span className='cursor-pointer text-lg font-semibold text-white text-opacity-80'>
                {' '}
                {'< Back'}{' '}
              </span>
            </Link>
            <div className='flex flex-col items-center justify-center'>
              <img src='/images/nova_logo.svg' alt='dmweed logo' />
              <div className='mt-12 flex w-full flex-col items-start justify-start space-y-12'>
                <div>
                  <span className='text-2xl font-bold text-white'>
                    What is it?
                  </span>
                  <p className='text-justify text-xl leading-relaxed text-white text-opacity-80'>
                    Nova was a SaaS application that allowed customers to make
                    purchases from their favorite ecommerce in an instant. I
                    worked on it as a full-stack developer, and I was
                    responsible for the frontend and backend development.
                  </p>
                  <div className='video-container'>
                    <iframe
                      src='https://www.youtube.com/embed/sfXl0ruoruQ'
                      title='Palace Tri-Ferg Live Cop - 2 Checkouts -  Nova AIO'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default DmWeedPage;
