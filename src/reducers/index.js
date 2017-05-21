import { combineReducers } from 'redux';
import coordinates from './coordinates'

const rootReducer = combineReducers({
  coordinates: coordinates,
});

export default rootReducer;
