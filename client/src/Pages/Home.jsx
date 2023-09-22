import React, { useEffect, useState } from 'react';
import { Blog } from '../Components';
import loader from '../asset/loader.svg';


const Home = () => {
    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:8000/createpost')
            .then((response) => {
                response.json()
                    .then((posts) => {
                        setAllPosts(posts)
                        console.log("POSTSSS", posts)
                        setIsLoading(false)
                    })
            })
    }, [])


    return (

        <div>
            <div>
                {isLoading &&
                    <div className='flex justify-center items-center'>
                        <img src={loader} alt='loader' />
                    </div>
                }



                {!isLoading && allPosts.length === 0 && (
                    <div className='mt-4'>
                        <h1 className='text-2xl font-bold text-center'>No Post at the Moment</h1>
                    </div>
                )}

                {!isLoading && allPosts.length > 0 && allPosts.map((post) => (
                    <Blog key={post._id} {...post} />
                ))}

            </div>


            {/* {allPosts.length > 0 ? (
                allPosts.map((post) => (
                    <Blog key={post._id} {...post} />
                ))

            ) : (
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-center'>No Post at the Moment</h1>
                </div>
            )} */}
        </div>
    )
}

export default Home
