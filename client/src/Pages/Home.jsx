import React, { useEffect, useState } from 'react'
import { Blog } from '../Components'

const Home = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/createpost')
            .then((response) => {
                response.json()
                    .then((posts) => {
                        setAllPosts(posts)
                        console.log("POSTSSS", posts)
                    })
            })
    }, [])


    return (

        <div>
            {allPosts.length > 0 ? (
                allPosts.map((post) => (
                    <Blog key={post._id} {...post} />
                ))

            ) : (
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-center'>No Post at the Moment</h1>
                </div>
            )}
        </div>
    )
}

export default Home
