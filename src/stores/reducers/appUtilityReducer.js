import {
    SET_CURRENT_PAGE
} from '../actionTypes/appUtilityActionType';

const intialState = {
    currentPage: 'home',
    test: ""
}

function appUtilityReducer(state = intialState, action){
    switch(action.type){
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        break;
        default:
            return state
    }
}

export default appUtilityReducer;