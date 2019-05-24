import React from 'react';
import {Statistic, Col, Row} from 'antd';
import './index.css';

class AvailableLeaveComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveType: [],
            startValue: null,
            endValue: null,
            noOfDays: ''
        }
        //this.refreshgetAllLeaveType = this.refreshgetAllLeaveType.bind(this)
    }

    componentDidMount() {}

    render() {

        return (

            <Row>
                <Col span={8}>
                    <Statistic title="Annuval" value={10} suffix="/ 10"/>
                </Col>
                <Col span={8}>
                    <Statistic title="Casual" value={5} suffix="/ 5"/>
                </Col>
                <Col span={8}>
                    <Statistic title="Medical" value={7} suffix="/ 7"/>
                </Col>
            </Row>

        );
    }
}

export default AvailableLeaveComponent;
