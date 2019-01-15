import React from 'react'
import { PropTypes } from 'prop-types';
import UserItem from '../UserItem/UserItem';

const UsersList = ({ users, handleOnClick }) => {
    return (
        users.map((user, index) => {
            return (
                <React.Fragment key={`${user.id.value}${index}`}>
                    <UserItem  userDetail={user} clickHandler={handleOnClick}/>
                </React.Fragment>
            );
        })
    )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func
}

export default UsersList;