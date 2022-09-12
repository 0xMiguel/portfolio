import * as React from 'react';

interface tag {
  tag: string;
}

export default function Hashtag(tag: tag) {
  return (
    <span className='mr-1 mt-1 rounded-md bg-primary-dark px-2 py-1 text-sm font-semibold text-primary-light-50'>
      #{tag.tag}
    </span>
  );
}
