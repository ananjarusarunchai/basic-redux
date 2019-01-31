
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import UsersList from '../../components/UserList/UsersList';
import './users.css';
import '../../css/utility.scss';
import ReduxContainer from '../hoc/reduxContainer';
import * as UsersAction from '../../actions/UsersAction';
import { bindActionCreators } from 'redux';
import UserModel from './model';

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
        debugger;
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
        let component = null;
        if (this.state.isLoading) {
            component =  <UsersList users={new UserModel().getDefaultUsersTemplate()} />;
        }
        else {
            component =  <UsersList users={this.props.users} handleOnClick={this.handleOnClick} />;
        }
        return (
            <React.Fragment>
                <div className="user-item-layout">
                    {component}
                    {this.state.isLoading && <div className='lmask'></div>}
                </div>
            </React.Fragment>
        )
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
        'mapDispatchToProps': mapDispatchToProps
    }
);

export default WrappedReduxComponent;
