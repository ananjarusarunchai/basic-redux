import React from 'react'
import { PropTypes } from 'prop-types';
import UserItem from '../UserItem/UserItem';

const UsersList = ({ users }) => {
    return (
        users.map((user, index) => {
            return (
                <React.Fragment key={`${user.id.value}${index}`}>
                    <UserItem  userDetail={user} />
                </React.Fragment>
            );
        })
    )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList;