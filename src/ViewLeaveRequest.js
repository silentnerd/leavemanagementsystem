import React from 'react';
import { Breadcrumb, Table, Tag, Input } from 'antd';

const Search = Input.Search;

class ViewLeaveRequest extends React.Component {

  render() {
    const columns = [
      {
             title: 'Employee Name',
             dataIndex: 'name',
             key: 'name',
           },
           {
             title: 'Start Date',
             dataIndex: 'sdate',
             key: 'date',
           },
           {
             title: 'End Date',
             dataIndex: 'edate',
             key: 'date',
           },
           {
             title: 'Number of Days',
             key: 'number',
             dataIndex: 'number',
     
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
             title: 'Reason',
             key: 'reason',
             dataIndex: 'reason',
           },
       
     ];
     
     const data = [
      {
        key: '1',
            
            sdate: '2019/05/21',
            edate: '2019/05/22',
            number:'2',
            reason:'Medical',
            name:'Karan',
        tags: ['Medical'],
      },
      {
            key: '2',
            
            sdate: '2019/05/21',
            edate: '2019/05/23',
            number:'3',
            reason:'Wedding',
            name:'Sujeeban',
        tags: ['Casual'],
          },
          {
            key: '3',
            
            sdate: '2019/05/21',
            edate: '2019/05/27',
            number:'7',
            reason:'Trip',
            name:'Keerthi',
        tags: ['Annual'],
          },
        {
            key: '4',
            
            sdate: '2019/05/21',
            edate: '2019/05/27',
            number:'7',
            reason:'Trip',
            name:'Priyanka',
        tags: ['Annual'],
          },
     
    
      
     ];

    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
          <Breadcrumb.Item>View Request</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Search placeholder="Search..." onSearch={value => console.log(value)}  style={{ width: 200 }}/>
        <br></br>
        <br></br>
          <Table columns={columns} dataSource={data} />

        </div>
      </React.Fragment>

    );
  }
}

export default ViewLeaveRequest;
