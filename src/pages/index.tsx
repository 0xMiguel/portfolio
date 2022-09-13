import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { useTranslationState } from '@/hooks/store';

import Hashtag from '@/components/Hashtag';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/nav';
import Seo from '@/components/Seo';
import TranslatedText from '@/components/TranslatedText';

export default function HomePage() {
  const store = useTranslationState();

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Navbar />
      <main className='flex justify-center'>
        <div className='flex h-max w-full flex-col p-4 md:w-7/12'>
          <section className='mb-16 flex flex-col'>
            <div className='flex h-full flex-col '>
              <div className='flex flex-col items-center'>
                <div className='mt-14 md:mt-20'>
                  <h1 className='mb-2 ml-6 text-5xl font-bold text-medium md:ml-16 md:text-6xl'>
                    <TranslatedText section='mainHeader' content='name' />
                  </h1>
                  <span className='ml-6 text-primary-light-50 md:ml-16 md:ml-20 md:text-xl'>
                    <TranslatedText section='mainHeader' content='role' />
                  </span>
                </div>
                <div className='flex flex-row md:ml-6'>
                  <button
                    type='button'
                    className='mt-4 mb-2 inline-flex items-center rounded-lg bg-red-primary px-6 py-2 text-center text-sm font-medium text-red-light shadow-2xl  hover:bg-opacity-80'
                  >
                    <span className='font-bold'>
                      <TranslatedText
                        section='mainHeader'
                        content='mainButton'
                      />
                    </span>
                  </button>
                  <Link href='/about'>
                    <button className='mt-1 ml-4 inline-flex items-center text-center text-primary-light-50 hover:text-primary-light-25'>
                      <span className='mr-2 font-bold'>
                        <TranslatedText section='mainHeader' content='about' />
                      </span>
                    </button>
                  </Link>
                </div>
                <div className='ml-2 mt-4 flex flex-row items-center'>
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
                <TranslatedText section='featured' content='title' />
              </span>
              <span className='text-lg text-light text-primary-medium-50'>
                <TranslatedText section='featured' content='description' />
              </span>
            </div>
            <div className='flex flex-col md:flex-row'>
              <Link href='https://posterrr.vercel.app/'>
                <div className='mb-4 flex cursor-pointer flex-col rounded-md bg-primary-dark-50 shadow-xl hover:bg-primary-medium md:mr-4 md:w-full'>
                  <div className='p-3'>
                    <span className='cursor-pointer text-2xl font-bold text-primary-light-25 hover:text-primary-light-50'>
                      Posterrr
                    </span>
                    <span>
                      <p className='text-md text-justify text-primary-light'>
                        <TranslatedText
                          section='featured'
                          content='projectDescriptionOne'
                        />
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
              <div className='mb-4 flex cursor-pointer flex-col rounded-md bg-primary-dark-50 shadow-xl hover:bg-primary-medium md:mr-4 md:w-full'>
                <div className='p-3'>
                  <span
                    suppressHydrationWarning
                    className='cursor-pointer text-2xl font-bold text-primary-light-25 hover:text-primary-light-50'
                  >
                    {store.isEnglish ? 'My portfolio' : 'Mi portafolio'}
                  </span>
                  <span>
                    <p className='text-justify text-sm text-primary-light'>
                      <TranslatedText
                        section='featured'
                        content='projectDescriptionTwo'
                      />
                    </p>
                  </span>
                  <ul className='mt-2 flex flex-wrap'>
                    <Hashtag tag='NextJS' />
                    <Hashtag tag='React' />
                    <Hashtag tag='Tailwind' />
                    <Hashtag tag='Zustand' />
                    <Hashtag tag='Vercel' />
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-4 flex flex-col'>
            <div className='flex flex-col'>
              <h5 className='text-2xl font-semibold text-primary-light-25'>
                <TranslatedText section='quotes' content='title' />
              </h5>
              <span className='mt-1 text-primary-light'>
                “Walker there is no path the path is made by walking” - Antonio
                Machado
              </span>
            </div>
            <div className='mt-4 flex flex-col'>
              <h5 className='mb-2 text-2xl font-semibold text-primary-light-25'>
                <TranslatedText section='articles' content='title' />
              </h5>
              <div className='mb-3 flex h-full flex-col'>
                <div className='mb-3 h-full w-11/12 cursor-pointer break-words rounded-lg bg-primary-dark-50 p-2 text-base font-semibold text-primary-light underline underline-offset-4'>
                  How To Create Your Initial Coin Offering (ICO) Contract in
                  Ethereum
                </div>
                <div className='mb-3 h-full w-11/12 cursor-pointer break-words rounded-lg bg-primary-dark-50 p-2 text-base font-semibold text-primary-light underline underline-offset-4'>
                  How To Create Your Initial Coin Offering (ICO) Contract in
                  Ethereum
                </div>
                <div className='mb-3 h-full w-11/12 cursor-pointer break-words rounded-lg bg-primary-dark-50 p-2 text-base font-semibold text-primary-light underline underline-offset-4'>
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
