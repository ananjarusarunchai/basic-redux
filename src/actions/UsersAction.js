import { FETCH_USERS, DELETE_USER } from '../constants/UsersActionTypes';
import { API_ROOT_URL } from '../constants/Constant';

export function fetchUsersSuccess(users) {
    return { type: FETCH_USERS, users: users }
}

export function deleteUserSuccess(users) {
    return { type: DELETE_USER, users: users }
}

export function fetchUsers() {
    return function (dispatch) {
        fetch(`${API_ROOT_URL}?results=10`)
            .then(response => response.json())
            .then(data => dispatch(fetchUsersSuccess(data.results)));
    }
};

export function deleteUser(users, id) {
    return function (dispatch) {
        const newUsers = users.filter((user) => {
            return user.id.value !== id
        });
        dispatch(deleteUserSuccess(newUsers));
    }
};