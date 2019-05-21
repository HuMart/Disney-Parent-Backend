import { LOGIN_START } from '../actions';

const initialState = {
    parents: [],
    loggingin: false,
    error: ''
};

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return{
                ...state,
                loggingin: true,
            }

        default:
            return state;
    }
};
export default reducer;