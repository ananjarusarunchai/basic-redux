import { combineReducers } from 'redux'
import Users from './Users/Users';
import News from './News/News';


export default combineReducers({
    Users,
    News
});