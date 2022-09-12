import * as React from 'react';

interface TranslatedTextOpts {
  section: 'nav' | 'hero' | 'featured';
}

export default function TranslatedText(props: TranslatedTextOpts) {
  return <span>{props.section}</span>;
}
