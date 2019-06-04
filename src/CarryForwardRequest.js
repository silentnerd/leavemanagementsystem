import React from 'react';
import {Breadcrumb, Table,Spin,Icon} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import fetchCarryForwardRequest from './api/carry-frrward'

const columns = [
    {
        title: 'Employee Name',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'No Of Days',
        dataIndex: 'noOfDays',
        key: 'noOfDays'
    }
];

class CarryForwardRequest extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
       this.props.getCarryForward();
    }

    componentDidMount(){
        console.log(this.props.carryforwardrequest)
        // this.props.getCarryForward();
     console.log("Error: " + this.props.error);
     console.log("Products: " + this.props.carryForwardRequest);
     console.log("Pending: " + this.props.pending);
    }
    execute = () =>{
        
       
        console.log("Error: " + this.props.error);
        console.log("Products: " + this.props.carryForwardRequest);
        console.log("Pending: " + this.props.pending);
   }
   shouldComponentRender() {
       const {pending} = this.props;
       if(this.pending === false) return false;
       // more tests
       return true;
   }
    render() {
     
        // const {carryForwardRequest, error, pending} = this.props;

        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        if (!this.shouldComponentRender()) return <div style={{textAlign: 'center', marginTop: '80px'}}><Spin style={{margin: '0 auto'}} indicator={antIcon}/></div>

        

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
                    <Table columns={columns} dataSource={this.props.carryforwardrequests}/>
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    // error: state.getCarryForwardRequest.error,
    carryforwardrequests: state.getCarryForwardRequest.carryForwardRequest,
    // pending: state.getCarryForwardRequest.pending,
});
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
        getCarryForward: fetchCarryForwardRequest
    }, dispatch);

}
export default connect(mapStateToProps, matchDispatchToProps)(CarryForwardRequest);
