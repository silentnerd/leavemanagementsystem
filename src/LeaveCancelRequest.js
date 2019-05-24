import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchCancelLeaveRequestsAction from './api/CancelLeaveRequest-Service';
import {
    Breadcrumb,
    Table,
    Input,
    Tag,
    Spin, 
    Icon
} from 'antd';

const Search = Input.Search;
 const columns = [
            {
                title: 'Employee Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'View Leave',
                dataIndex: 'view',
                key: 'view'
            }, {
                title: 'Leave Type',
                dataIndex: 'tags',
                key: 'tags',
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
            }, {
                title: 'Cancel Reason',
                dataIndex: 'reason',
                key: 'reason'
            }
        ];
class LeaveCancelRequest extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
       this.props.fetchCancelLeaveRequests();
    }

    componentDidMount(){
        this.props.fetchCancelLeaveRequests();
     console.log("Error: " + this.props.error);
     console.log("Products: " + this.props.cancelLeaveRequests);
     console.log("Pending: " + this.props.pending);
    }

    execute = () =>{
        
       
         console.log("Error: " + this.props.error);
         console.log("Products: " + this.props.cancelLeaveRequests);
         console.log("Pending: " + this.props.pending);
    }
    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {cancelLeaveRequests, error, pending} = this.props;

       

        const data1 = cancelLeaveRequests;
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        if (!this.shouldComponentRender()) return <div style={{textAlign: 'center', marginTop: '80px'}}><Spin style={{margin: '0 auto'}} indicator={antIcon}/></div>

        
        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Cancel Request</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360
                }}>
                    <Search
                        placeholder="Search..."
                        onSearch={value => console.log(value)}
                        style={{
                        width: 200
                    }}/>
                    <br></br>
                    <br></br>
                    <Table columns={columns} dataSource={this.props.cancelLeaveRequests} />
                </div>
                
 <button onClick={()=>{this.execute()}}>Change Color</button>
            </React.Fragment>

        );
    }
}


const mapStateToProps = (state) => ({
    error: state.getCancelLeaveRequests.error,
    cancelLeaveRequests: state.getCancelLeaveRequests.cancelLeaveRequests,
    pending: state.getCancelLeaveRequests.pending,
});
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCancelLeaveRequests: fetchCancelLeaveRequestsAction
    }, dispatch);
}


/* OR
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch);
}*/

export default connect(mapStateToProps, matchDispatchToProps)(LeaveCancelRequest);
