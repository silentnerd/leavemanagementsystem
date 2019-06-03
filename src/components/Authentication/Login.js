import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userLoginAction from '../../api/Authentication';
import 'antd/dist/antd.css';
import './Login.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

class Login extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
              username: null,
              password: null
            
        }
    
    }

    showProps = () => {
      console.log(this.props.userDetails);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.username +''+ this.state.password);
        if(this.state.username == null && this.state.password == null){
          console.log("Please enter username or password");
        }else{
          console.log(this.state.username + "," + this.state.password );
          this.props.userLogin({username: this.state.username, password: this.state.password});
        }
        /*this.props.formvalidateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });*/
    };

    onChange(event) {
          const target = event.target;
          const inputName = target.name;
          const inputValue = target.value;

          this.setState({
            [inputName]: inputValue
          });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (

            <div className="wrapper">

                <div className="login-center">
                    <Form onSubmit={this.handleSubmit} className="login-form">

                        <h6>LMS</h6>
                        <h5 className="title">L E A V E M A N A G E M E N T S Y S T E M</h5>
                        <br></br>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    }
                                ]
                            })(
                                <Input
                                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                name="username"
                                value={this.state.username}
                                onChange={(event) => this.onChange(event)}
                                placeholder="Username"/>,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Password!'
                                    }
                                ]
                            })(
                                <Input
                                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                name="password"
                                value={this.state.password}
                                onChange={(event) => this.onChange(event)}
                                type="password"
                               
                                placeholder="Password"/>,)}
                        </Form.Item>

                        <a className="login-form-forgot" href="/forgotpass">
                            Forgot password
                        </a>
                        <Button
                            type="primary"
                            onClick={this.handleSubmit}
                            htmlType="submit"
                            className="login-form-button">
                            Log in
                        </Button>
                        <div className="text-right p-t-225">
                            <span className="txt1">Don’t have an account?
                            </span>
                            <a className="txt2" href="Signup">
                                Sign Up</a>
                        </div>

                    </Form>
                </div>
            </div>
        );
    }
}

const LoginForm = Form.create({name: 'normal_login'})(Login);

const mapStateToProps = (state) => ({
    /* error: state.getCancelLeaveRequests.error,
  cancelLeaveRequests: state.getCancelLeaveRequests.cancelLeaveRequests,
  pending: state.getCancelLeaveRequests.pending,*/
    userDetails: state.userDetails
});

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        userLogin: userLoginAction
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
