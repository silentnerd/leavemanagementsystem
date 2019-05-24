import React from 'react';
import { Breadcrumb, Table,  Tag,  Tabs } from 'antd';

const TabPane = Tabs.TabPane;


class LeaveHistory extends React.Component {



  render() {

    const allrequests = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        key: 'name',
      },
{
    title: 'Leave Type',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag ;
          if (tag === 'Medical') {
            color = 'volcano';
          }
          else if (tag === 'Annual') {
           color = 'green';
         }
         else if (tag === 'Casual') {
           color = 'geekblue';
         }
          
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },

{
 title: 'Start Date',
 dataIndex: 'sdate',
},
{
 title: 'End Date',
 dataIndex: 'edate',
},
{
 title: 'Number of Days',
 dataIndex: 'number',
},
{
 title: 'Reason',
 dataIndex: 'reason',
},
{
 title: 'Status',
 dataIndex: 'status',
 
},

];

    const accepted = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        key: 'name',
      },
{
    title: 'Leave Type',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag ;
          if (tag === 'Medical') {
            color = 'volcano';
          }
          else if (tag === 'Annual') {
           color = 'green';
         }
         else if (tag === 'Casual') {
           color = 'geekblue';
         }
          
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },

{
 title: 'Start Date',
 dataIndex: 'sdate',
},
{
 title: 'End Date',
 dataIndex: 'edate',
},
{
 title: 'Number of Days',
 dataIndex: 'number',
},
{
 title: 'Reason',
 dataIndex: 'reason',
},
{
 title: 'Status',
 dataIndex: 'status',
 
},
{
 title: 'Accepted By',
 dataIndex: 'acceptedby',
 
},

];

    const rejected = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        key: 'name',
      },
{
    title: 'Leave Type',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag ;
          if (tag === 'Medical') {
            color = 'volcano';
          }
          else if (tag === 'Annual') {
           color = 'green';
         }
         else if (tag === 'Casual') {
           color = 'geekblue';
         }
          
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },

{
 title: 'Start Date',
 dataIndex: 'sdate',
},
{
 title: 'End Date',
 dataIndex: 'edate',
},
{
 title: 'Number of Days',
 dataIndex: 'number',
},
{
 title: 'Reason',
 dataIndex: 'reason',
},
{
 title: 'Status',
 dataIndex: 'status',
 
},
{
   title: 'Rejected By',
   dataIndex: 'rejectedby',
   
 },
 {
   title: 'Reject Reason',
   dataIndex: 'rejectreason',
   
},

];
const data = [
  {
    key: '1',
    tags: ['Medical'],
    sdate: '2019/05/21',
    edate: '2019/05/22',
    number:'2',
    reason:'Medical',
    status:'1',
   name:'Karan',
   rejectreason : 'No Leave',
   rejectedby : 'HR',
   acceptedby :'HR',
  },
  {
    key: '2',
    tags: ['Casual'],
    sdate: '2019/05/21',
    edate: '2019/05/23',
    number:'3',
    reason:'Wedding',
    status:'1',
   name:'Sujeeban',
   rejectreason : 'No Leave',
   rejectedby : 'HR',
   acceptedby :'HR',
  },
  {
    key: '3',
    tags: ['Annual'],
    sdate: '2019/05/21',
    edate: '2019/05/27',
    number:'7',
    reason:'Trip',
    status:'1',
   name:'Keerthi',
   rejectreason : 'No Leave',
   rejectedby : 'HR',
   acceptedby :'HR',
  },
  
  
  
 
];



    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
          <Breadcrumb.Item>Leave History</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Tabs >
            <TabPane tab="All Requests" key="1">
            <Table columns={allrequests} dataSource={data} />
    </TabPane>
            <TabPane tab="Accepted" key="2">
            <Table columns={accepted}  dataSource={data}/>
    </TabPane>
            <TabPane tab="Rejected" key="3">
            <Table columns={rejected}  dataSource={data}/>
    </TabPane>
          </Tabs>


        </div>

      </React.Fragment>
    );
  }
}

export default LeaveHistory;
