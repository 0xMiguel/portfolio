import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section className='flex h-96 flex-col md:h-96'>
          <nav className='bg-medium-dark bg-opacity-20 px-2 py-2.5 sm:px-4 '>
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

          <div className='flex h-full flex-col items-center text-center'>
            <div className='flex flex-col items-center'>
              <div className='mt-20 md:mt-16'>
                <h1 className='mb-2 text-5xl font-bold text-medium md:text-6xl'>
                  👋 I’m Miguel
                </h1>
                <span className='ml-14 font-semibold text-red-regular md:text-xl'>
                  Full Stack Software Developer
                </span>
              </div>
              <div className='flex flex-row'>
                <button
                  type='button'
                  className='mt-2 mb-2 inline-flex items-center rounded-lg bg-red-primary px-5 py-2.5 text-center text-sm font-medium text-red-light hover:bg-red-dark hover:bg-opacity-80'
                >
                  <span className='mr-2'>Let&apos;s talk</span>
                  <Image
                    alt='paper plane'
                    src='/images/paper_plane.svg'
                    width={20}
                    height={20}
                  />
                </button>
                <Link href='/about'>
                  <button className='ml-4 inline-flex items-center text-center text-medium-dark hover:text-medium'>
                    <span className='mr-2'>About me</span>
                    <Image
                      alt='right pointer'
                      className='ml-2 mt-2'
                      src='/images/right_pointer.svg'
                      width={18}
                      height={18}
                    />
                  </button>
                </Link>
              </div>
              <div className='mt-6 flex flex-row items-center'>
                <div className='mr-8'>
                  <Image
                    className='cursor-pointer'
                    alt='twitter logo'
                    src='/images/twitter_logo.svg'
                    width={40}
                    height={40}
                  />
                </div>
                <div className='mr-8'>
                  <Image
                    className='cursor-pointer'
                    alt='github logo'
                    src='/images/github_logo.svg'
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <Image
                    alt='telegram logo'
                    className='mr-4 cursor-pointer'
                    src='/images/telegram_logo.svg'
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col'>
          <div className='mt-2 flex flex-col pl-6 md:pl-12'>
            <span className='text-2xl font-semibold text-light'>
              Featured projects ✨
            </span>
            <span className='text-lg text-light text-medium-regular'>
              A collection of some side projects I have made
            </span>
          </div>
          <div className='mt-2 flex flex-col md:flex-row'>
            <Link href='https://posterrr.vercel.app/'>
              <div className='h-62 m-4  flex cursor-pointer flex-col rounded-md bg-dark p-2 shadow-xl hover:bg-medium-dark md:ml-12 md:w-96'>
                <div className='container p-3 pl-4'>
                  <span className='cursor-pointer text-2xl font-bold text-light hover:text-medium-regular'>
                    Posterrr
                  </span>
                  <span>
                    <p className='mt-1 text-justify text-sm text-medium-regular'>
                      A web scraper that searches for any article in medium,
                      hashnode, dev.to, and hackernews. Articles are ranked
                      based on number of likes and comments then shown in the
                      frontend.
                    </p>
                  </span>
                  <ul className='mt-1 ml-4 list-disc text-light'>
                    <li>
                      Scraper built using{' '}
                      <span className='font-semibold'>Golang</span>{' '}
                    </li>
                    <li>
                      Frontend built with{' '}
                      <span className='font-semibold'>NextJS </span> hosted on
                      <span className='font-semibold'> Vercel</span>
                    </li>
                    <li>
                      Backend web service hosted on{' '}
                      <span className='font-semibold'>DigitalOcean</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <div className='h-62 m-4 flex cursor-pointer flex-col rounded-md bg-dark p-2 shadow-xl hover:bg-medium-dark md:w-96'>
              <div className='container p-3 pl-4'>
                <span className='cursor-pointer text-2xl font-bold text-light hover:text-medium-regular'>
                  My portfolio
                </span>
                <span>
                  <p className='mt-1 text-justify text-sm text-medium-regular'>
                    Where I showcase my personal work, skills, and blog about
                    things I like.
                  </p>
                </span>
                <ul className='mt-1 ml-4 list-disc text-light'>
                  <li>
                    Frontend built with{' '}
                    <span className='font-semibold'>NextJS</span> and
                    <span className='font-semibold'> Tailwind</span>
                  </li>
                  <li>
                    Hosted on <span className='font-semibold'> Vercel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Footer section */}
        <section className='flex flex-col'>
          <div className='flex flex-col p-5 md:pl-12'>
            <h5 className='text-2xl font-semibold text-light'>
              Quote of the day ✍️
            </h5>
            <span className='text-medium'>
              “Walker there is no path the path is made by walking” - Antonio
              Machado
            </span>
          </div>
          <div className='flex flex-col p-5 md:pl-12'>
            <h5 className='mb-2 text-2xl font-semibold text-light'>
              Useful articles ✅
            </h5>
            <div className='mb-3 flex h-full flex-row'>
              <Image
                alt='post image'
                className='rounded-tl-lg rounded-bl-lg '
                src='/images/coin_Test.jpeg'
                width={50}
                height={40}
              />
              <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-dark p-2 text-sm text-light'>
                How To Create Your Initial Coin Offering (ICO) Contract in
                Ethereum
              </div>
            </div>

            <div className='mb-3 flex h-full flex-row'>
              <Image
                alt='post image'
                className='rounded-tl-lg rounded-bl-lg '
                src='/images/coin_Test.jpeg'
                width={50}
                height={40}
              />
              <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-dark p-2 text-sm text-light'>
                How To Create Your Initial Coin Offering (ICO) Contract in
                Ethereum
              </div>
            </div>

            <div className='flex h-full flex-row'>
              <Image
                alt='post image'
                className='rounded-tl-lg rounded-bl-lg '
                src='/images/coin_Test.jpeg'
                width={50}
                height={40}
              />
              <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-dark p-2 text-sm text-light'>
                How To Create Your Initial Coin Offering (ICO) Contract in
                Ethereum
              </div>
            </div>
          </div>

          {/*<div className='h-full w-full p-2 text-center text-light opacity-40'>*/}
          {/*  <span className='mt-auto align-bottom'>*/}
          {/*    Made with ❤️ by me - Black Lives Matter*/}
          {/*  </span>*/}
          {/*</div>*/}
        </section>
      </main>
    </Layout>
  );
}
