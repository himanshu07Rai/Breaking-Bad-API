import {combineReducers} from 'redux';
import deathReducer from './death/deathReducer';
import quoteReducer from './quote/quoteReducer';

const rootReducer = combineReducers({
    quote : quoteReducer,
    death : deathReducer
})

export default rootReducer;