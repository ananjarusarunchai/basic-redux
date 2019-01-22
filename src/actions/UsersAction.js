import { FETCH_USERS, DELETE_USER } from '../constants/UsersActionTypes';
import { API_ROOT_URL } from '../constants/Constant';
// import _ from 'lodash';

export function fetchUsersSuccess(users) {
    return { type: FETCH_USERS, users: users }
}

export function deleteUserSuccess(users) {
    return { type: DELETE_USER, users: users }
}

export function fetchUsers(limit = 100) {
    return function (dispatch) {
        fetch(`${API_ROOT_URL}?results=${limit}`)
            .then(response => response.json())
            .then(data => dispatch(fetchUsersSuccess(data.results)));
    }
};

export function deleteUser(users, id) {
    return function (dispatch) {
        const newUsers = users.filter((user) => {
            return user.login.uuid !== id
        });
        dispatch(deleteUserSuccess(newUsers));
    }
};