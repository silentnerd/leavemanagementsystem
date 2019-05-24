import React from 'react';
import moment from 'moment';
import axios from 'axios';
import {Table, Tag, Col, Row} from 'antd';
import './index.css';

const columns = [
    {
        title: 'Leave Type',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag;
                    if (tag === 'Medical') {
                        color = 'volcano';
                    } else if (tag === 'Annual') {
                        color = 'green';
                    } else if (tag === 'Casual') {
                        color = 'geekblue';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        )
    }, {
        title: 'Start Date',
        dataIndex: 'sdate'
    }, {
        title: 'End Date',
        dataIndex: 'edate'
    }, {
        title: 'Number of Days',
        dataIndex: 'number'
    }, {
        title: 'Reason',
        dataIndex: 'reason'
    }, {
        title: 'Status',
        dataIndex: 'status'
    }
];

const data = [
    {
        key: '1',
        tags: ['Medical'],
        sdate: '2019/05/21',
        edate: '2019/05/22',
        number: '2',
        reason: 'Medical',
        status: '1'
    }, {
        key: '2',
        tags: ['Casual'],
        sdate: '2019/05/21',
        edate: '2019/05/23',
        number: '3',
        reason: 'Wedding',
        status: '1'
    }, {
        key: '3',
        tags: ['Annual'],
        sdate: '2019/05/21',
        edate: '2019/05/27',
        number: '7',
        reason: 'Trip',
        status: '1'
    }
];

class LeaveHistoryComponent extends React.Component {

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

            <Row >
                <Col span={24}>

                    <Table columns={columns} dataSource={data}/>

                </Col>
            </Row>

        );
    }

}

export default LeaveHistoryComponent;
