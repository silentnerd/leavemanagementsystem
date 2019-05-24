import React from 'react';
import 'antd/dist/antd.css';
import './ForgetPassword.css';
import { Form, Icon, Input, Button } from 'antd';

class ForgetPassword extends React.Component {
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
      
      <div className="forgotPassword">
      
      <div className="forgot-center">
      <Form onSubmit={this.handleSubmit} className="forgot-form">
      <h6>LMS</h6>
      <h5 className="title">L E A V E  M A N A G E M E N T  S Y S T E M</h5>
     <br></br>
       
          <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          <Button   type="primary" htmlType="submit" className="forgot-form-button">
           Forget Password
          </Button>
          <Button  href="Login" type="default" htmlType="submit" className="login-form-button">Login</Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

const ForgetPasswordForm = Form.create({ name: 'normal_login' })(ForgetPassword);

export default ForgetPasswordForm;