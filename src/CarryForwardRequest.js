import React from 'react';
import {Breadcrumb, Table} from 'antd';

class CarryForwardRequest extends React.Component {

    render() {
        const dataSource = [
            {
                key: '1',
                empId: 'EMP1',
                name: 'Mark',
                noOfDays: '25'
            }, {
                key: '2',
                empId: 'EMP2',
                name: 'Tom',
                noOfDays: '12'
            }
        ];
        const columns = [
            {
                title: 'Employee ID',
                dataIndex: 'empId',
                key: 'empId'
            }, {
                title: 'Employee Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'No Of Days',
                dataIndex: 'noOfDays',
                key: 'noOfDays'
            }
        ];

        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Carry Forward Request</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360
                }}>
                    <Table columns={columns} dataSource={dataSource}/>
                </div>

            </React.Fragment>
        );
    }
}

export default CarryForwardRequest;