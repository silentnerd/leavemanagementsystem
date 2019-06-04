import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom'
import ApplyLeaveComponent from '../../ApplyLeave/index';
import CarryForwardRequest from '../../../CarryForwardRequest';
import LeaveCancelRequest from '../../../LeaveCancelRequest';
import LeaveHistory from '../../../leave-history/LeaveHistory';
import ViewCalendar from '../../ViewCalendar/ViewCalendar';
import ViewLeaveRequest from '../../../ViewLeaveRequest';
import Login from '../../Authentication/Login';
import SignUp from '../../Authentication/Signup';
import ForgotPassword from '../../Authentication/ForgetPassword';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../SiderComponent';
import './index.css';
  const {Content, Footer,} = Layout;
  
  class Dashboard extends React.Component {


    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
        <Route path="/">
          <SiderComponent />
          </Route>
                <Layout>
                  <Route path="/">
                    <HeaderComponent />
                    </Route>

                    <Content
                        style={{
                        margin: '24px 16px 0'
                    }}>
                    <Route path='/login' component={Login}/>
                        <Switch>
                          
                          <Route path='/signup' component={SignUp}/>
                          <Route path='/forgotpass' component={ForgotPassword}/>
                            <Route  path='/applyleave'>
                               <ApplyLeaveComponent />
                            </Route>

                            <Route path='/carryforwardrequest' component={CarryForwardRequest}/>
                            <Route path='/leavecancelrequest' component={LeaveCancelRequest}/>
                            <Route path='/leavehistory' component={LeaveHistory}/>
                            <Route path='/viewcalendar' component={ViewCalendar}/>
                            <Route path='/viewleaverequest' component={ViewLeaveRequest}/>
                        </Switch>

                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>
                        Human Resource Management System ©2018 Created by SGIC
                    </Footer>
                </Layout>
            </Layout>
         
      );

    }
  }
  function mapStateToProps(state) {
    return {
      user: state.activeUser
    }
  }
  export default connect(mapStateToProps)(Dashboard);