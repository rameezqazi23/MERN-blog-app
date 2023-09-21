import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loader from '../asset/loader.svg';
import { format } from 'date-fns';

const FullPost = () => {
    const [blogData, setBlogData] = useState(null);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:8000/full-post/${id}`)
            .then((response) => {
                response.json()
                    .then((blog) => {
                        setBlogData(blog)
                    })

            })
    }, [id])
    console.log(blogData)
    console.log("creator==>", blogData?.createdBy)
    // const { title, summmary, postContent, coverImageUrl, createdAt, createdBy } = blogData
    return (
        <div>
            {/* {!blogData ? (
                <img src={loader} alt='loader' />
            ) :
                (
                    
                    <h1 className='text-2xl font-bold text-center'>This is full Blog</h1>
                )} */}

            <div className='flex w-full h-full mt-6 justify-center items-center'>
                <div className='flex flex-col w-[700px] px-4 h-screen mx-auto'>
                    <h1 className='text-3xl font-bold text-center'>{blogData?.title}</h1>
                    <div className='mt-6'>
                        <p className='text-center font-semibold text-[15px]'>
                            Written By {blogData?.createdBy.fullName}
                            <span className='text-center font-semibold text-[15px] text-gray-500 gap-10'>
                                {format(new Date(blogData.createdAt), 'MMMM d, yyyy ')}
                            </span>
                        </p>

                    </div>
                    <div className='mt-6 justify-contain'>
                        <img className='w-full h-full rounded-lg object-cover' src={`http://localhost:8000/${blogData?.coverImageUrl}`} alt="cover" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FullPost
