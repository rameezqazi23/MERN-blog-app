import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import loader from '../asset/loader.svg';
import { format, formatISO9075 } from 'date-fns';
import { TiEdit } from 'react-icons/ti';
import './FullPost.css';
import { UserContext } from '../context/userContext';


const FullPost = () => {
    const [blogData, setBlogData] = useState({});
    const { id } = useParams();
    const { userInfo } = useContext(UserContext);
    console.log("User Info ", userInfo)

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
    // const formateDate = new Date(blogData?.createdAt)
    // console.log("Date==>", formateDate)
    const { createdAt, createdBy } = blogData



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
                            <p className='text-4xl font-bold text-center'>{blogData?.title}</p>
                            <div className='flex justify-center items-center mt-6 gap-2'>
                                <div className='flex justify-center items-center'>
                                    <div className='w-[82px] h-[80px] rounded-full flex justify-center items-center'>
                                        <img className='w-[60%] h-[60%] rounded-full' src='https://img.freepik.com/premium-vector/man-character_665280-46967.jpg?w=2000' alt="profile" />

                                        {/* <img className='w-[60%] h-[60%] rounded-full' src={`http://localhost:8000/${blogData?.coverImageUrl}`} alt="profile" /> */}
                                    </div>
                                    <p className='text-center font-semibold text-[15px]'>
                                        Written By {blogData?.createdBy?.fullName}
                                    </p>
                                </div>


                                <p className='font-bold text-xl text-gray-400 mb-2'>
                                    .
                                </p>
                                <time className='text-center font-normal text-[15px] text-gray-500'>
                                    {createdAt}
                                    {/* {format(new Date(createdAt), 'MMMM d, yyyy')} */}
                                    {/* {(new Date(createdAt)).toISOString().split('T')[0]} */}
                                </time>

                            </div>

                            <div className='flex justify-center '>
                                {userInfo?._id === blogData.createdBy?._id && (
                                    <Link to={`/edit-post/${blogData?._id}`} className='flex flex-row justify-center items-center text-xl font-semibold underline decoration-solid'>
                                        Edit Post?<TiEdit className='w-[25px] h-[25px]' />
                                    </Link>
                                )}
                            </div>

                            <div className='mt-6 justify-contain'>
                                <img className='w-full h-full rounded-md object-cover' src={`http://localhost:8000/${blogData?.coverImageUrl}`} alt="cover" />
                            </div>
                            <div className='w-full h-screen mt-[100px] post-content'>
                                <div className='h-screen px-8 text-justify' dangerouslySetInnerHTML={{ __html: blogData.postContent }} />
                            </div>

                        </div>

                    </div>
                )}

        </div>
    )
}

export default FullPost
