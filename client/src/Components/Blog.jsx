import React from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
//flex sm:flex-row flex-col
const Blog = ({ title, summary, postContent, coverImageUrl, createdAt, createdBy, _id }) => {


  return (

    <div className='w-full h-full my-6'>
      
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 px-8'>

        <div className='co'>
          <Link to={`/full-post/${_id}`} className='cursor-pointer'>
            <img src={`http://localhost:8000/${coverImageUrl}`} alt="blog"
              className='w-full h-full object-contain rounded-xl'
            />
          </Link>
        </div>
        
        <div>
          <Link to={`/full-post/${_id}`} className='cursor-pointer'>
            <h2 className='sm:text-xl md:text-2xl text-3xl text-gray-700 font-bold'>{title}</h2>
          </Link>
          <p className='text-sm font-semibold text-gray-600 mt-2'>
            <a href="/">{createdBy?.fullName}</a><br />
            <time className='font-normal text-gray-400 text-[12px]'>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>

          </p>
          <p className='leading-[25px] mt-4 font-semibold line-clamp-4'>{summary}</p>
        </div>
      </div>


    </div>
  )
}

export default Blog
