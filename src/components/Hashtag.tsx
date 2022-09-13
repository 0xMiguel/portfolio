import * as React from 'react';

interface HashtagOpts {
  tag: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: 'text-sm' | 'text-lg';
}
// 'mr-1 mt-1 rounded-md bg-primary-dark px-2 py-1 text-sm text-primary-light-50'
export default function Hashtag(tag: HashtagOpts) {
  function buildClass() {
    let baseStyle = 'mr-1 mt-1 rounded-md px-2 font-semibold py-1';
    if (tag.textSize) {
      baseStyle += ` ${tag.textSize}`;
    } else {
      baseStyle += ` text-sm`;
    }

    if (tag.backgroundColor) {
      baseStyle += ` ${tag.backgroundColor}`;
    } else {
      baseStyle += ' bg-primary-dark';
    }

    if (tag.textColor) {
      baseStyle += ` ${tag.textColor}`;
    } else {
      baseStyle += ' text-primary-light-50';
    }
    return baseStyle;
  }

  return <span className={buildClass()}>#{tag.tag}</span>;
}
