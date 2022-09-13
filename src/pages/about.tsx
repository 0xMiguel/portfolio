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
        <div className='mt-5 h-max w-full  w-full p-4 md:mt-10 md:w-7/12'>
          <div>
            <span className='text-2xl font-semibold text-medium-regular'>
              My background 😁
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

          <div className='mt-10 flex flex-col'>
            <span className='text-2xl font-semibold text-medium-regular'>
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
                tag='Typescript'
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
