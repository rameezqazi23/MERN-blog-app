import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loader from '../asset/loader.svg';
import { format, formatISO9075 } from 'date-fns';
import './FullPost.css';


const FullPost = () => {
    const [blogData, setBlogData] = useState({});
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
    // console.log("creator==>", blogData?.createdAt)
    const formateDate = new Date(blogData?.createdAt)
    console.log("Date==>", formateDate)
    // const { title, summmary, postContent, coverImageUrl, createdAt, createdBy } = blogData



    return (
        <div>
            {!blogData ? (
                <div className='flex justify-center items-center'>
                    <img src={loader} alt='loader' />
                </div>
            ) :
                (
                    <div className='flex w-full h-full mt-6 justify-center items-center'>
                        <div className='flex flex-col w-[700px] px-4 h-screen mx-auto'>
                            <p className='text-3xl font-bold text-center'>{blogData?.title}</p>
                            <div className='flex justify-center items-center mt-6 gap-10'>
                                <div className='w-[52px] h-[50px] rounded-full flex justify-center items-center'>
                                    <img className='w-[60%] h-[60%] rounded-full' src={`http://localhost:8000/${blogData?.coverImageUrl}`} alt="profile" />
                                </div>
                                <p className='text-center font-semibold text-[15px]'>
                                    Written By {blogData?.createdBy?.fullName}
                                </p>
                                {/* <time className='text-center font-normal text-[15px] text-gray-500'>
                            {formateDate}
                        </time> */}

                            </div>
                            <div className='mt-6 justify-contain'>
                                <img className='w-full h-full rounded-md object-cover' src={`http://localhost:8000/${blogData?.coverImageUrl}`} alt="cover" />
                            </div>
                            <div className='w-full h-screen mt-[100px] post-content'>
                                <div className='text-justify' dangerouslySetInnerHTML={{ __html: blogData.postContent }} />
                            </div>

                        </div>

                    </div>
                )}

        </div>
    )
}

export default FullPost
