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
              <img src='/images/dmweed_logo.svg' alt='dmweed logo' />
              <div className='mt-12 flex w-full flex-col items-start justify-start space-y-12'>
                <div>
                  <span className='text-2xl font-bold text-white'>
                    What is it?
                  </span>
                  <p className='text-justify text-xl leading-relaxed text-white text-opacity-80'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At elementum eu facilisis sed odio morbi quis. Vel
                    turpis nunc eget lorem dolor sed viverra ipsum. Sed odio
                    morbi quis commodo. Nisl tincidunt eget nullam non nisi est.
                    Massa massa ultricies mi quis. Faucibus et molestie ac
                    feugiat sed lectus. Malesuada fames ac turpis egestas. Risus
                    pretium quam vulputate dignissim suspendisse in est ante.
                    Arcu dictum varius duis at. At quis risus sed vulputate odio
                    ut enim. Ipsum a arcu cursus vitae congue.
                  </p>
                </div>

                <div>
                  <span className='text-2xl font-bold text-white'>
                    Technologies used
                  </span>
                  <p className='leading-loose text-white text-opacity-80'></p>
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
