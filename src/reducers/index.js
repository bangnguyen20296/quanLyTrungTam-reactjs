import { combineReducers } from 'redux';
import nguoiDung from './nguoiDung';
import errors from './error';

const rootReducer = combineReducers({
    nguoiDung, errors
})

export default rootReducer;