import { combineReducers } from 'redux';
import homepagereducerSlice from './homepagereducer';

const rootReducer = combineReducers({
  homepagereducer: homepagereducerSlice,
  
});

export default rootReducer;
