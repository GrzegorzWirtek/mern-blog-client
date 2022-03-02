import { combineReducers } from 'redux';
import articlesReducer from './articles';
import navigationReducer from './navigation';

export default combineReducers({
	articlesReducer,
	navigationReducer,
});
