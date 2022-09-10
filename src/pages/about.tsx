import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function aboutMe() {
  return (
    <Layout>
      <Seo templateTitle='About me' />
      <section>
        <nav className='border-2 border-r-0 border-t-0 border-l-0 border-medium px-2 py-2.5 sm:px-4 '>
          <div className='container mx-auto flex flex-wrap items-center justify-between'>
            <button
              data-collapse-toggle='navbar-default'
              type='button'
              className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
              </svg>
            </button>
            <div
              className='hidden w-full md:block md:w-auto'
              id='navbar-default'
            >
              <ul className='flex flex-row'>
                <li>
                  <Link href='/'>
                    <a
                      href='#'
                      className='block py-2 pr-4 pl-3 text-light hover:text-medium'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a
                      href='#'
                      className='block py-2 pr-4 pl-3 text-light hover:text-medium'
                      aria-current='page'
                    >
                      About me
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='text-light'>
              <span className='cursor-pointer hover:text-medium'>
                🇺🇸 English{' '}
              </span>
              <span className='cursor-pointer hover:text-medium'>
                / 🇪🇸 Español
              </span>
            </div>
          </div>
        </nav>
      </section>

      <section>
        <div className='flex flex-col p-10'>
          <div className='md:ml-2'>
            <span className='text-2xl font-semibold text-medium-regular'>
              What do I do? 🤔
            </span>
            <p className='mt-2 text-justify text-lg text-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              massa tempor nec feugiat nisl pretium. Est velit egestas dui id
              ornare arcu odio ut. Tempus urna et pharetra pharetra. Cursus
              turpis massa tincidunt dui ut. Tellus rutrum tellus pellentesque
              eu tincidunt tortor. Porttitor lacus luctus accumsan tortor
              posuere ac. Dolor sit amet consectetur adipiscing. Aliquam nulla
              facilisi cras fermentum odio eu feugiat pretium nibh. Non quam
              lacus suspendisse faucibus interdum posuere. Arcu odio ut sem
              nulla pharetra diam sit amet nisl. Congue mauris rhoncus aenean
              vel elit scelerisque mauris. Sodales ut etiam sit amet nisl. Non
              sodales neque sodales ut etiam. Metus dictum at tempor commodo
              ullamcorper a. In egestas erat imperdiet sed.
            </p>
          </div>

          <div className='mt-10 md:ml-2'>
            <span className='text-2xl font-semibold text-medium-regular'>
              Technologies 💻
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
