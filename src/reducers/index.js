import {combineReducers} from 'redux';
import CollapseSideBarReducer from './reducer-aside-toggle';
import FetchCancelLeaveRequestsReducer from './reducer-fetchCRL'

const allReducers = combineReducers({
    isCollapsed: CollapseSideBarReducer,
    getCancelLeaveRequests: FetchCancelLeaveRequestsReducer
}); 

export default allReducers;


