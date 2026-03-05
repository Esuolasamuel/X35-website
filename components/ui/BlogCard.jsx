import Image from 'next/image'
import React from 'react'


const BlogCard = ({title, date, excerpt, src}) => {
  return (
    <div className='w-90.67 h-115 flex flex-col bg-white'>
            <div key={title} className='blog-card'>
                <Image src={src} alt={title} width={300} height={200} className='w-full rounded-[10px]' />
                <div className='p-4'>
                    <p className='text-sm text-gray-400'>{date}</p>
                    <h3 className='text-lg font-semibold text-white mt-2'>{title}</h3>
                    <p className='text-sm text-gray-300 mt-2'>{excerpt}</p>
                </div>
            </div>
        
    </div>
  )
}

export default BlogCard