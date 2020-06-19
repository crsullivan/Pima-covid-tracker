import {LOAD_DATA, LOAD_SUCCESS, LOAD_FAILURE} from '../actions/index'

const initialState = {
    covidStats: {},
    loading: false,
    error: ''
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                covidData: action.payload
            }
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;