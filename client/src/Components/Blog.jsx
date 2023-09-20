import React from 'react'
import { format } from 'date-fns';
//flex sm:flex-row flex-col
const Blog = ({ title, summary, postContent, coverImageUrl, createdAt }) => {


  return (

    <div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 m-8'>
        <div className='w-full h-full object-contain'>
          <img src="https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg" alt="blog"
            className='rounded-xl'
          />
        </div>
        {/* <div className='w-full h-full object-contain'>
            <img src={`./${post.coverImageUrl}`} alt="blog"
              className='rounded-xl'
            />
          </div> */}
        <div>
          <h2 className='text-3xl text-gray-700 font-bold'>{title}</h2>
          <p className='text-sm font-semibold text-gray-600 mt-2'>
            <a href="#">Devin Coldway</a><br />
            <time className='font-normal text-gray-400 text-[12px]'>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>

          </p>
          <p className='leading-[25px] mt-8 font-semibold'>{summary}</p>
        </div>
      </div>


    </div>
  )
}

export default Blog
