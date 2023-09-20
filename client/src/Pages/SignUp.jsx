import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { CustomButton } from '../Components';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  // const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(e, 'I was closed.');
  // };

  const handleSubmit = async (e) => {

    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: JSON.stringify({ fullName, email, password }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    if(response.ok){
      navigate('/signin')

    }
    if (response.ok === false) {
      setError("This user is already registered")
    }
    console.log(response)


  }



  return (

    // <div className='w-full h-screen'>


    //   <div className='fixed w-full px-4 py-12 z-50'>

    //     <div
    //       className='max-w-[400px] h-[500px] mx-auto bg-[#f5f5f5] rounded-2xl drop-shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-100 text-white '>
    //       <div className='max-w-[320px] mx-auto py-16'>
    //         <h1 className='text-3xl font-bold text-[#2f2f2f]'>Sign Up</h1>

    //         <form className='w-full flex flex-col py-4 ' onSubmit={handleSubmit}>
    //           <input value={fullName} onChange={(e) => setFullName(e.target.value)} name="fullName" className='p-2 my-2 bg-[#2e2e2e] rounded bg-white text-black' type="text" placeholder='Full Name' />
    //           <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className='p-2 my-2 bg-[#2e2e2e] rounded bg-white text-black' type="email" placeholder='Email' />
    //           <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" className='p-2 my-2 bg-[#2e2e2e] rounded bg-white text-black' type="password" placeholder='Password'
    //             autoComplete='currentPassword' />
    //           <button type="submit" className='bg-blue-600 py-2 my-4 rounded font-bold w-24'>Sign Up</button>
    //           <div className='flex justify-between items-center text-sm text-gray-500'>
    //             <p>
    //               <input type="checkbox" /> Remember Me
    //             </p>
    //             <p>Need help?</p>
    //           </div>
    //           <p className='py-8 '>
    //             <span className='text-gray-500'>Already have an account? </span>
    //             <a className='text-gray-800 text-sm cursor-pointer font-bold' href="/user/signin"> Sign In Now</a>
    //           </p>
    //         </form>

    //       </div>

    //     </div>
    //   </div>

    // </div>

    <div className='w-[350px] p-4 bg-slate-100 flex flex-col justify-center items-center mx-auto rounded-xl'>
      {error && <Alert
        message="Error Message"
        showIcon
        description={error}
        closable
        // onClose={onClose}
        type="error"
        action={
          <Button size="small" danger>
            Detail
          </Button>
        }
      />}
      <h1 className='text-2xl font-bold text-gray-500 mt-6'>Create Account</h1>
      <Form
        name="normal_login"
        className="w-full h-full  p-6"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}

      >
        <Form.Item
          name="full name"
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
        >
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="full name" />

        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <div className='flex justify-between items-center'>

            <CustomButton
              title="SignUp"
              btnType='submit'
            />
            <a href="/signin">Already have an account</a>
          </div>
        </Form.Item>
      </Form>

    </div>
  )
}

export default SignUp
