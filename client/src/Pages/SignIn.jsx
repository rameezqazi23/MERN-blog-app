import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { CustomButton } from '../Components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/signin", {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",

    })

    if (response.ok) {
      response.json().then((user) => {
        setUserInfo(user)
        navigate('/')
      })

    } else {
      alert("Wrong credentails")
    }


  }


  return (
    <div className='w-[350px] p-4 bg-slate-100 flex flex-col justify-center items-center mx-auto rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-500 mt-6'>Sign In</h1>
      <Form
        name="normal_login"
        action='/login'
        method='post'
        className="w-full h-full  p-6"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >

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
              title="SignIn"
            />
            <a href="/signup">Create new account</a>
          </div>
        </Form.Item>
      </Form>

    </div>
  )
}

export default SignIn
