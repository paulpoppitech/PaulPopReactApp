import { combineReducers } from 'redux';

import car from './car';
import user from './user';

export default combineReducers({
  car,
  user
});
