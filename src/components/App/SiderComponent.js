import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout, Menu, Icon, Avatar} from 'antd';
import {Link} from 'react-router-dom'
//import './Dashboard.css';
  const { Sider,} = Layout;
  const SubMenu = Menu.SubMenu;
  
  class SiderComponent extends React.Component {

    logout = () =>{

    }
    render() {
      return (
                

                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.sidebar.isCollapsed}
                    width={240}
                    onBreakpoint={broken => {
                        console.log(broken);}}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);}} 
                    style={{
                      background: '#fff'
                    }}>
                    <div className="logo"><a href="/">Leave Management</a></div>
                    <br></br>
                    <div className="container-avatar"><Avatar size="large" icon="user"/>
                        <p style={{display: this.props.sidebar.isCollapsed ? 'none' : 'block'}}>Firstname Lastname</p>
                    </div>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Dashboard</span>
                        </Menu.Item>

                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="project"/><span>Leave Management</span></span >}>
                            <Menu.Item key="2">
                                <Link to='/applyleave'>Apply Leave</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/viewcalendar'>View Calendar</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to='/viewleaverequest'>View leave request</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to='/leavehistory'>Leave history</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to='/leavecancelrequest'>Leave cancel request</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to='/carryforwardrequest'>Carry forward request</Link>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="8">
                            <Icon type="setting"/>
                            <span>Setting</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

              
         
      );

    }
  }
  

   function mapStateToProps(state) {
       return {
           sidebar: state.isCollapsed
       }
   }

  export default connect(mapStateToProps)(SiderComponent);

 