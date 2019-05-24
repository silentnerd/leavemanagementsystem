import React from 'react';
import moment from 'moment';
import {
    Breadcrumb,
    Badge,
    Row,
    Col,
    Form,
    Input,
    Button,
    DatePicker,
    Select,
    Checkbox,
    Modal,
    message
} from 'antd';
import './ViewCalendar.css';
//import LeaveCalendarComponent from './LeaveCalendarComponent'
const Option = Select.Option;

class ViewCalendar extends React.Component {

    constructor() {
        super();
        this.state = {
            eventTitle: '',
            startAt: '',
            endAt: '',
            changePrimaryColorStyle: '#f5222d',
            changeSecondaryColorStyle: '#f86b73',
            chkboxAllDay: '',
            chkboxDraggable: '',
            chkboxBeforeStart: '',
            chkboxAfterEnd: '',
            chkboxAllDayDisabled: false,
            chkboxBeforeStartDisabled: false,
            chkboxAfterEndDisabled: false,
            startValue: null,
            endValue: null
        }
        this.handleChangeLeaveColor = this
            .handleChangeLeaveColor
            .bind(this)
        this.onChangeAllDay = this
            .onChangeAllDay
            .bind(this)
        this.onChangeDraggable = this
            .onChangeDraggable
            .bind(this)
        this.onChangeBeforeStart = this
            .onChangeBeforeStart
            .bind(this)
        this.onChangeAfterEnd = this
            .onChangeAfterEnd
            .bind(this)
    }
    componentDidMount() {
        /*axios.get('http://localhost:5000/api/projects').then(res =>
    {
      this.setState({
        Projectdata: res.data,
    })
    });*/
        let today = moment(new Date());
        let endday = moment(new Date()).add(10, 'days');
        console.log(endday);
        this.setState({
            endValue: today > endday
        });
    }

    handleChangeLeaveColor(value) {
        console.log(`selected ${value}`);
        if (value === "red") {
            this.setState({changePrimaryColorStyle: "#f5222d", changeSecondaryColorStyle: "#f86b73"});
        } else if (value === "blue") {
            this.setState({changePrimaryColorStyle: "#1890ff", changeSecondaryColorStyle: "#65b5ff"});
        } else if (value === "yellow") {
            this.setState({changePrimaryColorStyle: "#fadb14", changeSecondaryColorStyle: "#fce65f"});
        } else {}

    }

    disabledStartDate = startValue => {
        const todayValue = moment(new Date());
        if (!startValue || !todayValue) {
            return false;
        }
        return startValue.valueOf() <= todayValue.valueOf();
    };

    disabledEndDate = endValue => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({[field]: value});
    };

    onStartChange = value => {
        this.onChange('startValue', value);
        console.log(value);

    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({endOpen: true});
        }
    };

    handleEndOpenChange = open => {
        this.setState({endOpen: open});
    };

    onChangeAllDay(e) {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked === true) {
            this.setState({chkboxAllDay: 'true', chkboxAfterEndDisabled: true, chkboxBeforeStartDisabled: true});

        } else {
            this.setState({chkboxAllDay: 'false', chkboxAfterEndDisabled: false, chkboxBeforeStartDisabled: false});
        }
    }

    onChangeDraggable(e) {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked === true) {
            this.setState({chkboxDraggable: 'true'});
        } else {
            this.setState({chkboxDraggable: 'false'});
        }
    }

    onChangeBeforeStart(e) {
        console.log(`checked = ${e.target.checked}`);

        if (this.state.chkboxAfterEnd === 'true' || e.target.checked === true) {
            this.setState({chkboxAllDayDisabled: true});
        } else if (this.state.chkboxAfterEnd === 'false' || e.target.checked === false) {
            this.setState({chkboxAllDayDisabled: false});
        }

        if (e.target.checked === true) {
            this.setState({chkboxBeforeStart: 'true'});
        } else {
            this.setState({chkboxBeforeStart: 'false'});
        }
    }

    onChangeAfterEnd(e) {
        console.log(`checked = ${e.target.checked}`);
        if (this.state.chkboxBeforeStart === 'true' || e.target.checked === true) {
            this.setState({chkboxAllDayDisabled: true});
        } else if (this.state.chkboxBeforeStart === 'false' || e.target.checked === false) {
            this.setState({chkboxAllDayDisabled: false});
        }

        if (e.target.checked === true) {
            this.setState({chkboxAfterEnd: 'true'});
        } else {
            this.setState({chkboxAfterEnd: 'false'});
        }
    }

    showModal = () => {
        this.setState({visible: true});
    };

    handleOk = e => {
        console.log(e);
        this.setState({visible: false});
        message.success('New event entered successfully !');
    };

    handleCancel = e => {
        console.log(e);
        this.setState({visible: false});
    };

    render() {
        const {startValue, endValue, endOpen} = this.state;
        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
                    <Breadcrumb.Item>View Calendar</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 550
                }}>
                    <Button type="primary" onClick={this.showModal}>
                        + Add Event
                    </Button>
                    <br></br>
                    <br></br>
              
                    
                </div>

                <Modal
                    title="Add new Event"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Form layout="vertical">
                        <Form.Item label="Event Title">
                            <Input placeholder="Enter event title"/>
                        </Form.Item>
                        <Form.Item label="Starts At - Ends At">
                            <Row>
                                <Col span={12}>
                                    <DatePicker
                                        disabledDate={this.disabledStartDate}
                                        format="YYYY-MM-DD"
                                        value={startValue}
                                        placeholder="Starts At"
                                        onChange={this.onStartChange}
                                        onOpenChange={this.handleStartOpenChange}/>
                                </Col>
                                <Col span={12}>
                                    <DatePicker
                                        disabledDate={this.disabledEndDate}
                                        format="YYYY-MM-DD"
                                        value={endValue}
                                        placeholder="Ends At"
                                        onChange={this.onEndChange}
                                        open={endOpen}
                                        onOpenChange={this.handleEndOpenChange}/>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Row type="flex" justify="space-between">
                            <Col span={8}>
                                <Form.Item label="Event Color">
                                    <Select
                                        defaultValue="red"
                                        style={{
                                        width: 100
                                    }}
                                        onChange={this.handleChangeLeaveColor}>
                                        <Option value="red"><Badge color="red" text="Red"/></Option>
                                        <Option value="blue"><Badge color="blue" text="Blue"/></Option>
                                        <Option value="yellow"><Badge color="yellow" text="Yellow"/></Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col
                                span={8}
                                style={{
                                paddingLeft: '10px'
                            }}>
                                <Form.Item label="Primary">
                                    <div
                                        style={{
                                        height: '20px',
                                        width: '70px',
                                        background: this.state.changePrimaryColorStyle
                                    }}></div>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Secondary">
                                    <div
                                        style={{
                                        height: '20px',
                                        width: '70px',
                                        background: this.state.changeSecondaryColorStyle
                                    }}></div>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Checkbox
                                    onChange={this.onChangeAllDay}
                                    disabled={this.state.chkboxAllDayDisabled}>All day</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox onChange={this.onChangeDraggable}>Draggable</Checkbox>
                            </Col>
                        </Row>
                        <br></br>
                        <Form.Item label="Resizable">
                            <Row>
                                <Col span={12}>
                                    <Checkbox
                                        onChange={this.onChangeBeforeStart}
                                        disabled={this.state.chkboxBeforeStartDisabled}>Before start</Checkbox>
                                </Col>
                                <Col span={12}>
                                    <Checkbox
                                        onChange={this.onChangeAfterEnd}
                                        disabled={this.state.chkboxAfterEndDisabled}>After end</Checkbox>
                                </Col>
                            </Row>
                        </Form.Item>

                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ViewCalendar;