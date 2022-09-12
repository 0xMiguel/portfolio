import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Hashtag from '@/components/Hashtag';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/nav';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Navbar />
      <main className='flex justify-center'>
        <div className='flex h-max w-full flex-col p-4 md:w-6/12'>
          <section className='flex h-96 flex-col md:h-96'>
            <div className='flex h-full flex-col '>
              <div className='flex flex-col items-center'>
                <div className='mt-24 md:mt-20'>
                  <h1 className='mb-2 text-5xl font-bold text-medium md:text-6xl'>
                    👋 I’m Miguel
                  </h1>
                  <span className='ml-16 text-primary-light-50 md:ml-20 md:text-xl'>
                    Full Stack Software Developer
                  </span>
                </div>
                <div className='flex flex-row md:ml-10'>
                  <button
                    type='button'
                    className='mt-2 mb-2 inline-flex items-center rounded-lg bg-red-primary px-6 py-2 text-center text-sm font-medium text-red-light shadow-2xl  hover:bg-opacity-80'
                  >
                    <span className='font-bold'>Let&apos;s talk</span>
                  </button>
                  <Link href='/about'>
                    <button className='ml-4 inline-flex items-center text-center text-primary-light-50 hover:text-primary-light-25'>
                      <span className='mr-2 font-bold'>About me</span>
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
            <div className='mb-4 flex w-full flex-col'>
              <span className='text-2xl font-semibold text-primary-light-25'>
                Featured projects ✨
              </span>
              <span className='text-lg text-light text-primary-medium-50'>
                A collection of some side projects I have made
              </span>
            </div>
            <div className='flex flex-col md:flex-row'>
              <Link href='https://posterrr.vercel.app/'>
                <div className='h-62 mb-4 flex cursor-pointer flex-col rounded-md bg-primary-dark-50 shadow-xl hover:bg-primary-medium md:mr-4  md:w-96'>
                  <div className='p-3'>
                    <span className='cursor-pointer text-2xl font-bold text-primary-light-25 hover:text-primary-light-50'>
                      Posterrr
                    </span>
                    <span>
                      <p className='text-md text-justify text-primary-light'>
                        A web scraper that searches for any article in medium,
                        hashnode, dev.to, and hackernews. Articles are ranked
                        based on number of likes and comments then shown in the
                        frontend.
                      </p>
                    </span>
                    <ul className='mt-2 flex flex-wrap'>
                      <Hashtag tag='Golang' />
                      <Hashtag tag='NextJS' />
                      <Hashtag tag='Docker' />
                      <Hashtag tag='Scraping' />
                      <Hashtag tag='React' />
                      <Hashtag tag='Tailwind' />
                      <Hashtag tag='Vercel' />
                    </ul>
                  </div>
                </div>
              </Link>
              <div className='h-62 mb-4 flex cursor-pointer flex-col rounded-md bg-primary-dark-50 shadow-xl hover:bg-primary-medium md:mr-4 md:w-96'>
                <div className='p-3'>
                  <span className='cursor-pointer text-2xl font-bold text-primary-light-25 hover:text-primary-light-50'>
                    My portfolio
                  </span>
                  <span>
                    <p className='text-justify text-sm text-primary-light'>
                      Where I showcase my personal work, skills, and blog about
                      things I like.
                    </p>
                  </span>
                  <ul className='mt-2 flex flex-wrap'>
                    <Hashtag tag='NextJS' />
                    <Hashtag tag='React' />
                    <Hashtag tag='Tailwind' />
                    <Hashtag tag='Vercel' />
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-4 flex flex-col'>
            <div className='flex flex-col'>
              <h5 className='text-2xl font-semibold text-primary-light-25'>
                Quote of the day ✍️
              </h5>
              <span className='mt-1 text-primary-light'>
                “Walker there is no path the path is made by walking” - Antonio
                Machado
              </span>
            </div>
            <div className='mt-4 flex flex-col'>
              <h5 className='mb-2 text-2xl font-semibold text-primary-light-25'>
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
                <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-primary-dark-50 p-2 text-sm text-primary-light-25'>
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
                <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-primary-dark-50 p-2 text-sm text-primary-light-25'>
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
                <div className='h-full w-64 break-words rounded-tr-lg rounded-br-lg bg-primary-dark-50 p-2 text-sm text-primary-light-25'>
                  How To Create Your Initial Coin Offering (ICO) Contract in
                  Ethereum
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
