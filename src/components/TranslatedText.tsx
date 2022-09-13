import * as React from 'react';

import { useTranslationState } from '@/hooks/store';

import { translations } from '@/utils/translations';

interface TranslatedTextOpts {
  section: 'navbar' | 'mainHeader' | 'featured' | 'quotes' | 'articles';
  content: string;
}

export default function TranslatedText(props: TranslatedTextOpts) {
  const store = useTranslationState();
  return (
    <span suppressHydrationWarning>
      {store.isEnglish
        ? translations[props.section].english[props.content]
        : translations[props.section].spanish[props.content]}
    </span>
  );
}
