import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { CustomButton } from '../Components';


const SignUp = () => {
  return (
    <div className='w-[350px] p-4 bg-slate-100 flex flex-col justify-center items-center mx-auto rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-500 mt-6'>Create Account</h1>
      <Form
        name="normal_login"
        className="w-full h-full  p-6"
        initialValues={{ remember: true }}
      // onFinish={onFinish}
      >
        <Form.Item
          name="full name"
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="full name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <div className='flex justify-between items-center'>

            <CustomButton
              title="SignUp"
            />
            <a href="/signin">Already have an account</a>
          </div>
        </Form.Item>
      </Form>

    </div>
  )
}

export default SignUp
