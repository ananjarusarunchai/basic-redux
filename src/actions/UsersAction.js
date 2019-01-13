import { FETCH_USERS } from '../constants/UsersActionTypes';
import { API_ROOT_URL } from '../constants/Constant';

export function fetchUsersSuccess(users) {
    return { type: FETCH_USERS, users: users}
}

export function fetchUsers () {
    return function(dispatch) {
        fetch(`${API_ROOT_URL}?results=100`)
        .then(response => response.json())
        .then(data => dispatch(fetchUsersSuccess(data)));
    }
};