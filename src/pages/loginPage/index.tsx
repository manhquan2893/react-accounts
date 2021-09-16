import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './style.scss'
import { useDispatch } from 'react-redux';
import { CredentialType, loginAction } from '../../redux/actions/auth';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const onFinish = (values: CredentialType) => {
    dispatch(loginAction(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t("Username")}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t("Password")}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {t("Login")}
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default LoginPage
