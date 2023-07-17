/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';
import {
  RiGithubFill,
  RiQuestionAnswerFill,
  RiShareBoxFill,
  RiStarFill,
  RiTwitterFill,
} from 'react-icons/ri';

import Box from '@/components/Box';
import MotionBox from '@/components/MotionBox';

import Layout from '@/features/Layout';
import Seo from '@/features/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='flex flex-col gap-y-8'>
        {/* nav: name, contact*/}
        <div className='flex flex-col items-center lg:flex-row '>
          {/* name with faded shadow */}
          <div className='flex flex-row items-center gap-x-8'>
            <div className='relative'>
              <span className='text-custom-gradient text-6xl font-bold'>
                miguel
              </span>
              {/* faded shadow*/}
              <span className='text-custom-gradient-diffused absolute inset-0 text-6xl font-bold'>
                miguel
              </span>
            </div>
            <div className='flex flex-row gap-x-2'>
              <Link href='https://twitter.com/miguelodev' passHref>
                <RiTwitterFill
                  size={28}
                  className='cursor-pointer text-white'
                />
              </Link>
              <Link href='https://github.com/0xMiguel' passHref>
                <RiGithubFill size={28} className='cursor-pointer text-white' />
              </Link>
            </div>
          </div>
          {/* contact */}
          <Link href='https://cal.com/0xmiguel' passHref>
            <div className='mt-2 flex cursor-pointer flex-row items-center gap-x-2 text-yellow-400 lg:mt-0 lg:ml-auto'>
              <span className='text-xl font-semibold '>Contact me</span>
              <RiQuestionAnswerFill size={24} className='' />
            </div>
          </Link>
        </div>
        {/* section 1: profile card, about me*/}
        <div className='flex flex-col gap-y-8 md:gap-x-8 lg:flex-row'>
          {/* profile card*/}
          <Box className='border-2 border-purple-500'>
            <div className=' flex flex-col  items-center justify-center lg:mt-4 lg:flex-row'>
              <img
                src='/images/profile_image.jpg'
                className='h-36 w-36 rounded-full lg:mt-2'
                alt='profile image'
              />
              <div className='ml-4 flex flex-col items-center justify-center lg:mt-4'>
                <span className='text-4xl font-bold text-white'>
                  I&apos;m Miguel
                </span>
                <span className='text-md font-medium text-white lg:text-xl'>
                  Full Stack Engineer 👨‍💻
                </span>
                <div className='mt-1 mr-4 flex flex-row items-center justify-center text-center'>
                  <div className='mr-2 h-3 w-3 scale-100 transform animate-pulse rounded-full bg-green-500'></div>
                  <span className='text-lg font-semibold text-green-500'>
                    Online
                  </span>
                </div>
              </div>
            </div>
          </Box>
          <Box className='flex w-full flex-col p-4 lg:w-7/12'>
            <span className='text-xl font-bold text-white'>
              Hello everyone 👋
            </span>
            <div className='mt-2 flex items-center justify-center'>
              <p className='text-md font-medium leading-loose text-white text-opacity-80 lg:text-lg'>
                As a passionate software engineer, I excel in problem-solving,
                collaboration, and coding across various technologies. With
                experience from simple websites to complex web applications, I
                effectively debug and communicate with teammates. Currently,
                I&apos;m enhancing my skills in TypeScript for its versatility
                and robust typing system.
              </p>
            </div>
          </Box>
        </div>
        {/* section title */}
        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-x-2'>
            <RiStarFill size={24} className='text-yellow-400' />
            <h1 className='text-3xl font-semibold text-white'>
              What I&apos;ve Built
            </h1>
          </div>
          <span className='text-white text-opacity-70'>
            {' '}
            Looking for my resume?{' '}
            <Link href='https://cal.com/0xmiguel'>
              <span className=' cursor-pointer font-semibold underline underline-offset-4'>
                Contact me
              </span>
            </Link>
          </span>
        </div>
        {/* section 2: project highlights*/}
        <div className='flex flex-col gap-y-8 md:gap-x-8 lg:flex-row'>
          {/* dmweed */}
          <Link href='/projects/dmweed'>
            <MotionBox
              whileHover={{ y: -4 }}
              className='relative flex h-48 cursor-pointer flex-col items-center justify-center lg:w-3/12'
            >
              <div>
                <img src='/images/dmweed_logo.svg' alt='dmweed logo' />
              </div>
              <div className='absolute bottom-5 left-5'>
                {' '}
                {/* position it absolutely at the bottom-left */}
                <RiShareBoxFill size={28} className='text-white' />
              </div>
            </MotionBox>
          </Link>
          {/* nova*/}
          <Link href='/projects/nova'>
            <MotionBox
              whileHover={{ y: -4 }}
              className='relative flex h-48 cursor-pointer flex-col items-center justify-center lg:w-3/12' // Added relative here
            >
              <div className=''>
                <img src='/images/nova_logo.svg' alt='nova logo' />
              </div>
              <div className='absolute bottom-5 left-5'>
                {' '}
                {/* position it absolutely at the bottom-left */}
                <RiShareBoxFill size={28} className='text-white' />
              </div>
            </MotionBox>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
