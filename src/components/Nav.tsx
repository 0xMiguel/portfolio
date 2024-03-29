import Link from 'next/link';
import * as React from 'react';

import { useTranslationState } from '@/hooks/store';

import TranslatedText from '@/components/TranslatedText';

export default function Navbar() {
  const store = useTranslationState();

  const changeLanguage = (lang: 'english' | 'spanish') => {
    store.changeLanguage(lang);
  };
  return (
    <nav className='bg-primary-medium bg-opacity-20 px-2 py-2.5 sm:px-4 '>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <ul className='flex flex-row '>
          <li>
            <Link href='/'>
              <a
                href='#'
                className='text-primary-light-25 hover:text-primary-light block py-2 pr-4 pl-3'
                aria-current='page'
              >
                <TranslatedText section='navbar' content='home' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                href='#'
                className='text-primary-light-25 hover:text-primary-light block py-2 pr-4 pl-3'
                aria-current='page'
              >
                <TranslatedText section='navbar' content='about' />
              </a>
            </Link>
          </li>
        </ul>
        <div className='text-primary-light-25'>
          <span
            onClick={() => {
              changeLanguage('english');
            }}
            className={`hover:text-primary-light-50 cursor-pointer ${
              store.isEnglish
                ? 'text-primary-light font-bold underline underline-offset-2'
                : ''
            }`}
          >
            🇺🇸 English
          </span>
          <span> / </span>
          <span
            onClick={() => {
              changeLanguage('spanish');
            }}
            className={`hover:text-primary-light-50 cursor-pointer ${
              store.isSpanish
                ? 'text-primary-light font-bold underline underline-offset-2'
                : ''
            }`}
          >
            🇪🇸 Español
          </span>
        </div>
      </div>
    </nav>
  );
}
