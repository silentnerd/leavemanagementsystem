import React from 'react';
import {Breadcrumb, Col, Row} from 'antd';
import './index.css';
import ApplyLeave from './ApplyLeave';
import CarryForwardRequestComponent from './carryForwardRequest';
import AvailableLeaveComponent from './availableLeave';
import LeaveHistoryComponent from './leaveHistory';

class ApplyLeaveComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveType: [],
            startValue: null,
            endValue: null,
            noOfDays: ''
        }
        //  this.refreshgetAllLeaveType = this.refreshgetAllLeaveType.bind(this)
    }

    componentDidMount() {}

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col id="responsive-div1" span={16}>
                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>Leave Managment</Breadcrumb.Item>
                            <Breadcrumb.Item>Apply Leave</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                            marginRight: '20px'
                        }}>
                            <ApplyLeave></ApplyLeave>
                        </div>

                    </Col>

                    <Col id="responsive-div2" span={8}>

                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>Available Leave</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 50
                        }}>
                            <AvailableLeaveComponent></AvailableLeaveComponent>
                        </div>
                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>
                                Carry Forward Leave Request</Breadcrumb.Item>
                        </Breadcrumb>

                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 50,
                            marginTop: '20px'
                        }}>
                            <CarryForwardRequestComponent></CarryForwardRequestComponent>
                        </div>
                    </Col>
                </Row>

                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>
                        Leave History</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360,
                    marginTop: '20px'
                }}>
                    <LeaveHistoryComponent></LeaveHistoryComponent>
                </div>

            </React.Fragment>
        );
    }

}

export default ApplyLeaveComponent;
