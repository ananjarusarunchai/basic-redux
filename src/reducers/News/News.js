import * as actionTypes from '../../constants/NewsActionTypes';
import initialState from '../initialState';
import update from 'immutability-helper';

export default function usersReducer(state = initialState.news, action) {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_SUCCESS:
            const newNewsArticles = update(state, {$push: action.news});
            return newNewsArticles;
        default:
            return state
    }
};