import * as ActionTypes from './ActionTypes';


const initialState = {
    isLoading: true,
    leaders: [],
    errMess: null
}
export const Leaders = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LEADER_LOADING: return {
            ...state,
            isLoading: true,
            leaders: [],
            errMess: null
        }
        case ActionTypes.ADD_LEADER: return {
            ...state,
            isLoading: false,
            leaders: action.payload,
            errMess: null
        }
        case ActionTypes.LEADER_FAILED: return {
            ...state,
            isLoading: false,
            leaders: [],
            errMess: action.payload
        }
        default:
            return state
    }
}



