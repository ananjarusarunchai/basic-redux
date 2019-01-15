import * as actionTypes from '../../constants/UsersActionTypes';
import initialState from '../initialState';

export default function usersReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return action.users;
        case actionTypes.DELETE_USER:
            return action.users;
        default:
            return state
    }
};