import React from 'react'
import PropTypes from 'prop-types';
import './userItem.css';

const UserItem = ({ userDetail, clickHandler}) => {
    const imgSrc = userDetail.picture.large;
    const fullNameObj = userDetail.name;
    const fullNameStr = `${fullNameObj.title}. ${fullNameObj.first} ${fullNameObj.last}`;
    return (
        <React.Fragment>
            <div className='userItem' onClick={() => clickHandler(userDetail.id.value)}>
                <img src={imgSrc} alt={fullNameStr} width='300px' height='300px'></img>
                <span><p>Full Name : </p></span>
                <span>{fullNameStr}</span>
            </div>
        </React.Fragment>
    )
};

UserItem.propTypes = {
    userDetail: PropTypes.object.isRequired,
    clickHandler: PropTypes.func
};

export default UserItem;