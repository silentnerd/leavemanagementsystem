import React from 'react';
import moment from 'moment';
import {
    Form,
    Upload,
    Icon,
    Tag,
    Input,
    Col,
    Select,
    Row,
    Button,
    DatePicker
} from 'antd';
import './index.css';
const InputGroup = Input.Group;
const {TextArea} = Input;
const props = Upload;

class ApplyLeaveComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveType: [],
            startValue: null,
            endValue: null,
            noOfDays: ''
        }
    }

    componentDidMount() {}

    disabledStartDate = startValue => {
        const startYear = new Date().getFullYear();
        const endYear = moment()
            .add(1, 'years')
            .year();

        const todayValue = moment(startYear + '/1/1');
        const startValue1 = moment(endYear + '/1/1');
        if (!startValue || !todayValue) {
            return false;
        }
        return startValue.valueOf() <= todayValue.valueOf() || startValue.valueOf() >= startValue1.valueOf();
    };

    disabledEndDate = endValue => {
        const endYear = moment()
            .add(1, 'years')
            .year();
        const startValue1 = moment(endYear + '/1/1');
        if (!endValue || !this.state.startValue) {
            return false;
        }
        return endValue.valueOf() <= this
            .state
            .startValue
            .valueOf() || endValue.valueOf() >= startValue1.valueOf();
    };

    onChange = (field, value) => {
        this.setState({[field]: value});
    };

    onStartChange = value => {
        this.onChange('startValue', value);
        console.log(value);

    };

    onEndChange = value => {
        console.log("onEndChange");
        this.onChange('endValue', value);

    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({endOpen: true});
        }
    };

    handleEndOpenChange = open => {
        this.setState({endOpen: open});
        if (!this.state.startValue === null) {

            const days = this
                .state
                .endValue
                .diff(this.state.startValue, 'days');
            console.log(days);
            this.setState({noOfDays: '1'});
        }
    };

    render() {
        const {startValue, endValue, endOpen} = this.state;
        return (
            <Row>
                <Col span={24}>
                    <InputGroup>
                        <Row gutter={24}>
                            <Col id="responsive-input1" span={6}>
                                <Form.Item hasFeedback label="Start Date" layout='inline'>
                                    <div>
                                        <DatePicker
                                            disabledDate={this.disabledStartDate}
                                            format="YYYY-MM-DD"
                                            value={startValue}
                                            placeholder="Starts At"
                                            onChange={this.onStartChange}
                                            onOpenChange={this.handleStartOpenChange}/>

                                    </div>
                                </Form.Item>

                            </Col>
                            <Col id="responsive-input2" span={6}>
                                <Form.Item hasFeedback label="End Date" layout='vertical'>
                                    <div>
                                        <DatePicker
                                            disabledDate={this.disabledEndDate}
                                            format="YYYY-MM-DD"
                                            value={endValue}
                                            placeholder="Ends At"
                                            onChange={this.onEndChange}
                                            open={endOpen}
                                            onOpenChange={this.handleEndOpenChange}/>

                                    </div>
                                </Form.Item>

                            </Col>
                            <Col id="responsive-input3" span={6}>
                                <Form.Item hasFeedback label="Number of Days" layout='vertical'>
                                    <div>
                                        <Input defaultValue={this.state.noOfDays} disabled/>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </InputGroup>

                    <InputGroup>
                        <Row gutter={24}>
                            <Col id="responsive-input4" span={12}>
                                <Form.Item hasFeedback label="Type of Leave" layout='vertical'>
                                    <InputGroup compact>

                                        <Select defaultValue="Type of Leave">
                                            {this.state.leaveType}
                                        </Select>

                                    </InputGroup>
                                </Form.Item>
                            </Col>

                            <Col id="responsive-input5" span={12}>
                                <Form.Item hasFeedback label="Attachments" layout='vertical'>
                                    <div>
                                        <Upload {...props}>
                                            <Button>
                                                <Icon type="upload"/>
                                                Click to Upload
                                            </Button>
                                        </Upload>

                                    </div>
                                </Form.Item>

                            </Col>
                        </Row>
                    </InputGroup>

                    <Form.Item hasFeedback label="Reason" layout='vertical'>

                        <div
                            style={{
                            margin: '24px 0'
                        }}>
                            <TextArea
                                placeholder="Reason"
                                autosize={{
                                minRows: 2,
                                maxRows: 8
                            }}/>

                        </div>

                    </Form.Item>

                    <Button
                        type="primary"
                        style={{
                        float: 'right'
                    }}>Request</Button>
                    <Button
                        type="danger"
                        style={{
                        float: 'right',
                        marginRight: '10px'
                    }}>Clear</Button>

                </Col>
            </Row>

        );
    }

}

export default ApplyLeaveComponent;
