import * as React from 'react';

import Hashtag from '@/components/Hashtag';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/nav';
import Seo from '@/components/Seo';

export default function aboutMe() {
  return (
    <Layout>
      <Seo templateTitle='About me' />
      <section>
        <Navbar />
      </section>

      <section className='flex justify-center'>
        <div className='mt-5 h-max w-full w-full p-4 md:mt-10 md:w-7/12'>
          <div>
            <span className='text-2xl font-semibold text-primary-light-25'>
              My background 😁
            </span>
            <p className='mt-2 text-justify text-lg text-primary-light'>
              Im a software engineer who is passionate about learning. I love
              solving problems and working with other people to make the world a
              better place. I have been programming since I was nine, and I have
              experience with the technologies listed below. Ive worked on
              everything from simple websites to complex web applications. In
              addition to being able to write code, I can also debug effectively
              and communicate clearly with my teammates. I am currently learning
              how to program in Rust because its a language that is becoming
              more popular due to its low overhead and high performance.
            </p>
          </div>

          <div className='mt-10 flex flex-col'>
            <span className='text-2xl font-semibold text-primary-light-25'>
              Technologies 💻
            </span>
            <span className='text-lg text-primary-medium-50'>
              These are some of the technologies I use, the list keep growing
              because I love learning 📚
            </span>
            <ul className='mt-2 flex flex-wrap'>
              <Hashtag
                tag='Redux'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-redux'
              />
              <Hashtag
                tag='NodeJS'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-node'
              />
              <Hashtag
                tag='React'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-react'
              />
              <Hashtag
                tag='Python'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-python'
              />
              <Hashtag
                tag='PostgreSQL'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-sql'
              />
              <Hashtag
                tag='Postman'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-postman'
              />
              <Hashtag
                tag='Golang'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-golang'
              />
              <Hashtag
                tag='Git'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-git'
              />
              <Hashtag
                tag='Docker'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-docker'
              />
              <Hashtag
                tag='Solidity'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-zinc-900'
              />
              <Hashtag
                tag='Tailwind'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-tailwind'
              />
              <Hashtag
                tag='AWS'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-aws'
              />
              <Hashtag
                tag='Electron'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-electron'
              />
              <Hashtag
                tag='TypeScript'
                textSize='text-lg'
                textColor='text-white'
                backgroundColor='bg-technologies-typescript'
              />
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
