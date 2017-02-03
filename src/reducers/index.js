import { combineReducers } from 'redux';

import good from './good';
import user from './user';

export default combineReducers({
  good,
  user
});
