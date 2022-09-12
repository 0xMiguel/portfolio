import * as React from 'react';

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
