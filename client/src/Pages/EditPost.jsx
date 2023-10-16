import React, { useEffect, useState } from 'react'
import { CustomButton } from '../Components';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [postContent, setPostContent] = useState('');
    const [files, setFiles] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/full-post/${id}`)
            .then((response) => {
                response.json()
                    .then((blogData) => {
                        setTitle(blogData.title)
                        setSummary(blogData.summary)
                        setPostContent(blogData.postContent)

                    })
            })
    }, [id])

    const handleSubmit = async (e) => {

        e.preventDefault()
        const data = new FormData();

        data.set('title', title);
        data.set('summary', summary);
        data.set('postContent', postContent);
        data.set('id', id)

        if (files?.[0]) {
            data.set('coverImageUrl', files?.[0])
        }

        await fetch(`http://localhost:8000/full-post`, {
            method: 'PUT',
            body: data,
            credentials: 'include',
        }).then(navigate(`/full-post/${id}`))

        // if (response.ok) {
        //     navigate(`/full-post`)
        // }

    }


    return (
        <div className="w-full h-screen flex items-center justify-center mt-4">

            <div className="bg-slate-100 w-[600px] p-6 mx-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">Edit Your Post</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Title" />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Summary</label>
                        <input
                            type="summary"
                            id="summary"
                            name="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Post Summary" />
                    </div>

                    <div className="w-full h-[300px] mb-8">
                        <label className="block font-semibold mb-1">Message</label>
                        <ReactQuill
                            className='overflow-y-auto h-full'
                            value={postContent}
                            onChange={(postText) => setPostContent(postText)}
                        />
                    </div>

                    {/* <div className="mb-4">
                <label for="image" className="block font-semibold mb-1">Image</label>
                <input type="file" id="coverImageUrl" name="coverImageUrl" className="w-full py-2 focus:outline-none" />
            </div> */}




                    {/* <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                // getValueFromEvent={normFile}
                extra="upload jpg/png/jpeg format only"
            >
                <Upload
    
                    onChange={(e) => setFiles(e.target.files)}
                    name="logo"
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Select file</Button>
                </Upload>
            </Form.Item> */}



                    <div className='mt-8'>
                        <input type="file" onChange={(e) => setFiles(e.target.files)} />
                        <CustomButton
                            title="Update Post"
                            type='submit'
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default EditPost
