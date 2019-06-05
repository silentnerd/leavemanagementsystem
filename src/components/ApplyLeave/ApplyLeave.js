import React from 'react';
import axios from 'axios';
import moment from 'moment';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
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
// import { fetchAllLeaveType } from '../../api/APIUtil';
const InputGroup = Input.Group;
const {TextArea} = Input;
const props = Upload;
const Option = Select.Option;

class ApplyLeaveComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveType: [],
            startValue: null,
            endValue: null,
            days: null,
            leaveRequest:{
                startDate: null,
                endDate: null,
                noOfDays: null,
                reason:'',
                leaveTypeValue:null
            }
            
        }
        this.getAllLeaveType = this.getAllLeaveType.bind(this)
    }
    getAllLeaveType(){
        // this.state.leaveType.splice(0, this.state.leaveType.length);
        axios.get("http://localhost:8050/hrm_system/leavetype").then((response) => {
                      for (let i = 0; i < response.data.length; i++) {
                          this.state.leaveType.push(<Option key={response.data[i].id}>{response.data[i].leaveTypeValue}</Option>);
                      }
                    });
                    console.log(this.state.leaveType);
                }

   
          componentDidMount() {
        }
        
        componentWillMount() {
            this.getAllLeaveType()
        }
        
        
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
            console.log(this.state.endOpen)
            const days = this.state.endValue.diff(this.state.startValue, 'days');
            console.log(days);
            this.setState({noOfDays: '1'});
        }
    };
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        const {startValue, endValue, endOpen} = this.state;
        return (
            <Row>
                <Col span={24}>
                    <Form onSubmit={this.handleSubmit}>
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

                                        <Select defaultValue="Type of Leave"
                                        // value = {this.state.leaveRequest.leaveTypeValue}
                                        >
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
                    </Form>
                </Col>
            </Row>

        );
    }

}
export default ApplyLeaveComponent
// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({
//       getAllLeaveType: fetchAllLeaveType
//     }, dispatch);
//   }
//   export default connect(matchDispatchToProps)(ApplyLeaveComponent); ;
