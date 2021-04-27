import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import isAuthReducer from './isAuth/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  isAuth: isAuthReducer,
})

export default rootReducer;