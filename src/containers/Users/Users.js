
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersAction from '../../actions/UsersAction';
import { PropTypes } from 'prop-types';
import UsersList from '../../components/UserList/UsersList';
import './users.css';
import '../../css/utility.scss';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.props.userActions.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        if (nextProps.users !== this.props.users) { //bad practice
            const newState = nextProps.users;
            this.setState({ users: newState });
            this.setState({ isLoading: false });
        }
    }

    handleOnClick = (id) => {
        debugger;
        this.props.userActions.deleteUser(this.state.users, id);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='lmask'></div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <div className="user-item-layout">
                        <UsersList users={this.state.users} handleOnClick={this.handleOnClick} />
                    </div>
                </React.Fragment>
            )
        }
    }
};

Users.propTypes = {
    users: PropTypes.array,//PropTypes.arrayOf(PropTypes.object),
    userActions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        users: state.Users
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userActions: bindActionCreators(UsersAction, dispatch) 
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
