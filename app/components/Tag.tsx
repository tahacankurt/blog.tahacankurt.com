'use client';

import React from 'react';

type TagProp = {title:string, index:number};

const bgColorList = ['neuorange', 'neuorange'];
function Tag({ title, index }: TagProp) {
  return (
    <button type="button" className={`bg-${bgColorList[index % 2]} text-white text-sm py-1 px-2 rounded-md ml-2 neubrutalItem`}>
      {title}
    </button>
  );
}

export default Tag;
