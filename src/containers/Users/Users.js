
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import UsersList from '../../components/UserList/UsersList';
import './users.css';
import '../../css/utility.scss';
import ReduxContainer from '../hoc/reduxContainer';
import * as UsersAction from '../../actions/UsersAction';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.3/node_modules/redux';


const UsersPropTypesState = {
    users: PropTypes.array,
    //PropTypes.arrayOf(PropTypes.object),
};

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users: [],
            isLoading: false
        }
    }


    componentDidMount() {
        if (this.props.users.length > 0) {
            return;
        }
        this.setState({ isLoading: true });
        this.props.userActions.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users !== this.props.users) { //bad practice
            const newState = nextProps.users;
            this.setState({ users: newState });
            this.setState({ isLoading: false });
        }
    }

    handleOnClick = (id) => {
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
                        <UsersList users={this.props.users} handleOnClick={this.handleOnClick} />
                    </div>
                </React.Fragment>
            )
        }
    }
};

Users.propTypes = { ...UsersPropTypesState, userActions: PropTypes.object.isRequired };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userActions: bindActionCreators(UsersAction, dispatch)
    }
};

const WrappedReduxComponent = ReduxContainer(Users, 
    { 
        'class': 'Users', 
        'reducers': UsersPropTypesState,
        'mapDispatchToProps' : mapDispatchToProps 
    }
);

export default WrappedReduxComponent;
