import * as actionTypes from '../../constants/NewsActionTypes';
import initialState from '../initialState';

export default function usersReducer(state = initialState.news, action) {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_SUCCESS:
            return action.news;
        default:
            return state
    }
};