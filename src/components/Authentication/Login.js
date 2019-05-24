import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      
      <div className="wrapper">
      
      <div className="login-center">
      <Form onSubmit={this.handleSubmit} className="login-form">
   
      <h6>LMS</h6>
      <h5 className="title">L E A V E  M A N A G E M E N T  S Y S T E M</h5>
      <br></br>
        <Form.Item>
           {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/forgotpass">
            Forgot password
          </a>
          <Button   type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <div className="text-right p-t-225">
						<span className="txt1">Don’t have an account? </span>
            <a className="txt2" href="Signup"> Sign Up</a>
					</div>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;