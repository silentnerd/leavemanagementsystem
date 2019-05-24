let defaultState = {
    isCollapsed: false
}

export default function(state=defaultState, action) {
    console.log(action.type);
    switch (action.type) {
        case 'EXPAND_SIDEBAR':
            console.log("In Switch case: isCollapse: false");
            return Object.assign({}, state, {isCollapsed: false})
        case 'COLLAPSE_SIDEBAR':
            console.log("In Switch case: isCollapse: true");
            return Object.assign({}, state, {isCollapsed: true})
        
        default:
            return state;
    }
}

