import React from 'react';
import 'antd/dist/antd.css';
import './Signup.css';
import { Form, Icon, Input, Button, Select} from 'antd';


const Option=Select.Option;

class Signup extends React.Component {
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
         
      <div className="signup-center">
      
      <Form onSubmit={this.handleSubmit} className="signup-form">

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
          {getFieldDecorator('role', {
            rules: [{ required: true, message: 'Please input your role!' }],
          })(
            <Select defaultValue="HR" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}> 
            <Option value="hr">HR</Option>
            <Option value="admin">admin</Option>
            <Option value="accountant">Accountant</Option>
            <Option value="manager">Manager</Option>
            <Option value="employee">Employee</Option>
            <Option value="trainee">Trainee</Option>
            </Select>,

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
         
          <Button type="primary" htmlType="submit" className="signup-form-button">
           SignUp
          </Button>
          <Button  href="/login" type="default" htmlType="submit" className="signup-form-button">Login</Button>
       
      </Form>
      </div>
    );
  }
}

const SignupForm = Form.create({ name: 'normal_login' })(Signup);

export default SignupForm;