import React from 'react'
//flex sm:flex-row flex-col
const Blog = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 m-8'>
        <div className='w-full h-full object-contain'>
          <img src="https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg" alt="blog"
            className='rounded-xl'
          />
        </div>
        <div>
          <h2 className='text-3xl text-gray-700 font-bold'>Full Battery Backup Comming Later this year</h2>
          <p className='text-sm font-semibold text-gray-600 mt-2'>
            <a href="#">Devin Coldway</a><br />
            <time className='font-normal text-gray-400 text-[12px]'>2:25 AM GMT + 1 January 6, 2023</time> 

          </p>
          <p className='leading-[25px] mt-8 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam commodi quos alias, ad illo esse eum cum odit incidunt ullam odio minus, ut earum praesentium nobis animi, quibusdam neque debitis?</p>
        </div>
      </div>

    </div>
  )
}

export default Blog
