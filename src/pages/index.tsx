/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Box from '@/components/Box';

import Layout from '@/features/Layout';
import Seo from '@/features/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='flex flex-col'>
        <div className='flex flex-col items-start '>
          <div className='relative'>
            <span className='text-custom-gradient text-6xl font-bold'>
              miguel
            </span>
            <span className='text-custom-gradient-diffused absolute inset-0 text-6xl font-bold'>
              miguel
            </span>
          </div>
        </div>
        <div className='mt-10 flex flex-col gap-y-8 md:gap-x-8 lg:flex-row'>
          <Box className='flex w-full cursor-pointer justify-center py-20 lg:w-3/12'>
            <div>
              <img src='/images/twitter_logo_blue.svg' alt='twitter' />
            </div>
          </Box>
          <Box className='flex w-full cursor-pointer justify-center py-20 lg:w-3/12'>
            <div>
              <img src='/images/github_logo.svg' alt='github' />
            </div>
          </Box>
          <Box className='flex-1 flex-shrink-0 items-center justify-center border-2 border-purple-500 bg-purple-gradient'>
            <div className='mt-6 flex flex-col lg:flex-row'>
              <img
                src='/images/profile_image.jpg'
                className='h-36 w-36 rounded-full border-2 border-purple-500 lg:mt-2'
                alt='profile image'
              />
              <div className='ml-4 flex flex-col lg:mt-4'>
                <span className='text-4xl font-bold text-white'>Miguel B.</span>
                <span className='text-md font-semibold text-white lg:text-xl'>
                  Full Stack Developer 👨‍💻
                </span>
                <span className='text-lg font-medium text-green-500'>
                  Online
                </span>
              </div>
            </div>
          </Box>
        </div>
        <div className='mt-10 flex flex-col gap-y-8 md:gap-x-8 lg:flex-row'>
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
          <div className='flex cursor-pointer flex-col items-center justify-center gap-y-4'>
            <Box className='flex w-full justify-center py-10 px-10'>
              <div>
                <img src='/images/calendar.svg' alt='my calendar' />
              </div>
            </Box>
            <Box className='flex w-full cursor-pointer justify-center py-10 px-10'>
              <div>
                <img src='/images/discord_logo.svg' alt='my calendar' />
              </div>
            </Box>
          </div>
          <Box className='flex-shrink-0 items-center justify-center'>
            <div className='flex flex-row justify-center p-4'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/images/stack.svg' alt='my skills' />
            </div>
          </Box>
        </div>
      </main>
    </Layout>
  );
}
