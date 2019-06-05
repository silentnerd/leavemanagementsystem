import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Tag, Col, Row } from "antd";
import fetchViewMyLeaveHistory from "../../api/view-my-leave-history-service";

const columns = [
  {
    title: "Leave Type",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag;
          if (tag === "Medical") {
            color = "volcano";
          } else if (tag === "Annual") {
            color = "green";
          } else if (tag === "Casual") {
            color = "geekblue";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Start Date",
    dataIndex: "sdate"
  },
  {
    title: "End Date",
    dataIndex: "edate"
  },
  {
    title: "Number of Days",
    dataIndex: "number"
  },
  {
    title: "Reason",
    dataIndex: "reason"
  },
  {
    title: "Status",
    dataIndex: "status"
  }
];

class ViewMyLeaveHistory extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  shouldComponentRender() {
    // const {pending} = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  componentWillMount() {
    this.props.ViewMyLeaveHistory();
  }

  componentDidMount() {
    this.props.ViewMyLeaveHistory();
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={this.props.viewMyLeaveHistoryData}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  error: state.getViewMyLeaveHistoryStore.error,
  viewMyLeaveHistoryData: state.getViewMyLeaveHistoryStore.viewMyLeaveHistory,
  pending: state.getViewMyLeaveHistoryStore.pending
});
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ViewMyLeaveHistory: fetchViewMyLeaveHistory
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ViewMyLeaveHistory);
