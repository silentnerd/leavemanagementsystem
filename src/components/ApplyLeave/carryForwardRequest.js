import React from 'react';
import {Form, Input, Col, Row, Button} from 'antd';
import './index.css';

class CarryForwardRequestComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveType: [],
            startValue: null,
            endValue: null,
            noOfDays: ''
        }
        // this.refreshgetAllLeaveType = this.refreshgetAllLeaveType.bind(this)
    }

    componentDidMount() {}

    render() {
        return (

            <Row >
                <Col span={24}>

                    <Form.Item layout='vertical' label="Remaining days of Annual Leave">
                        <div >
                            <Input defaultValue="0" disabled/>
                        </div>
                    </Form.Item>

                    <Form.Item layout='vertical' label="Number of Leave to be Carry forwarded">
                        <div >
                            <Input defaultValue="0"/>
                        </div>
                    </Form.Item>
                    <Button
                        type="primary"
                        style={{
                        float: 'right'
                    }}>Submit</Button>

                </Col>
            </Row>

        );
    }

}

export default CarryForwardRequestComponent;
