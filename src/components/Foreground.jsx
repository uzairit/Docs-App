import React, { useRef, useState } from 'react'
import Card from './Card'
function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      id: 1, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '.9mb', close: false, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      id: 2, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '.9mb', close: false, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue' },
    },
    {
      id: 3, desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '.9mb', close: false, tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },
    }
  ]
  useState()
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground