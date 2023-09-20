import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Upload, } from 'antd';
import { CustomButton } from '../Components';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [postContent, setPostContent] = useState('');
    const [files, setFiles] = useState();

    const navigate = useNavigate();

    // const normFile = (e) => {
    //     console.log('Upload event:', e);
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.set('title', title);
        data.set('summary', summary);
        data.set('postContent', postContent);
        data.set('coverImageUrl', files[0])

        // console.log(data)

        const response = await fetch("http://localhost:8000/createpost", {
            method: 'POST',
            body: data,
            credentials:'include',
        })
        if(response.ok){
            navigate('/');
        }
    }


    return (
        <div className="w-full h-screen flex items-center justify-center mt-4">

            <div className="bg-slate-100 w-[600px] p-6 mx-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">Create New Post</h2>
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

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Message</label>
                        <ReactQuill
                            value={postContent}
                            onChange={(postText) => setPostContent(postText)}
                        />
                    </div>

                    {/* <div className="mb-4">
                        <label for="image" className="block font-semibold mb-1">Image</label>
                        <input type="file" id="coverImageUrl" name="coverImageUrl" className="w-full py-2 focus:outline-none" />
                    </div> */}

                    <input type="file" onChange={(e) => setFiles(e.target.files)} />



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






                    <CustomButton
                        title="Create Post"
                        type='submit'
                    />
                </form>
            </div>
        </div >
    )
}

export default CreatePost
