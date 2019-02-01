import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './userItem.css';
import defaultUserIcon from './assets/defaultUserIcon.jpg';

class UserItem extends PureComponent {

    handleOnClick = () => {
        return this.props.clickHandler(this.props.userDetail.login.uuid)
    }
    
    render() {
        const imgSrc = this.props.userDetail.picture.large || defaultUserIcon;
        const fullNameObj = this.props.userDetail.name;
        const fullNameStr = `${fullNameObj.title}. ${fullNameObj.first} ${fullNameObj.last}`;
        return (
            <React.Fragment>
                <div className='userItem' onClick={this.handleOnClick}>
                    <img src={imgSrc}  width='300px' height='300px' alt={fullNameStr} ></img>
                    <span><p>Full Name : </p></span>
                    <span>{fullNameStr}</span>
                </div>
            </React.Fragment>
        )
    }
}


UserItem.propTypes = {
    userDetail: PropTypes.object.isRequired,
    clickHandler: PropTypes.func
};

export default UserItem;