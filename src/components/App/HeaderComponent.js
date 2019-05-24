import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    collapseSideBar,
    expandSideBar
} from '../../actions/index';
import {
    Layout,
    Icon,
    Badge,
    Row,
    Col
} from 'antd';
import {Link} from 'react-router-dom';
//import './Dashboard.css';

const {Header} = Layout;

class HeaderComponent extends React.Component {

    componentDidMount(){
        console.log(this.props);
    }

    onClickcollapseSidebar = (event) => {

        if (this.props.sidebar.isCollapsed == true) {
          console.log("expand");
          console.log(this.props);
          this.props.expandSideBar();
        } else if (this.props.sidebar.isCollapsed == false) {
            
              console.log("collapsed");
              console.log(this.props);
              this.props.collapseSideBar();
        }else{
            
        }
    }

    logout = () => {
        this.props.history.push('/login')
    }

    render() {
        return (

            <Header
                style={{
                background: '#007bff',
                paddingLeft: '14px'
            }}>
                <div style={{
                    float: 'left'
                }}>

                    <Icon
                        style={{
                        color: 'white',
                        fontSize: '18px',
                        padding: '20px'
                    }}
                        className="trigger"
                        type={this.props.sidebar.isCollapsed
                        ? 'menu-unfold'
                        : 'menu-fold'}
                        onClick={this.onClickcollapseSidebar}/>
                </div>
                <Row
                    style={{
                    width: '60px',
                    float: 'right'
                }}
                    type="flex"
                    justify="end">
                    <Col span={12}>
                        <Badge count={2} showZero>
                            <Icon
                                style={{
                                color: 'white',
                                fontSize: '18px',
                                float: 'right'
                            }}
                                align="right"
                                type="bell"/>
                        </Badge>
                    </Col>
                    <Col span={12}>
                        <Link to="/login">
                        <Icon
                            style={{
                            color: 'white',
                            fontSize: '18px',
                            padding: '20px 0 20px 20px',
                            float: 'right'
                        }}
                            align="right"
                            type="logout"
                            onClick={this.logout}/>
                            </Link>
                    </Col>
                </Row>
            </Header>

        );

    }
}

function mapStateToProps(state) {
    return {
        sidebar: state.isCollapsed
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        collapseSideBar: collapseSideBar,
        expandSideBar: expandSideBar
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderComponent);

