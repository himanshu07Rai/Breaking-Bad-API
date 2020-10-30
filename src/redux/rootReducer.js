import {combineReducers} from 'redux';
import deathReducer from './death/deathReducer';
import quoteReducer from './quote/quoteReducer';
import cReducer from './characters/cReducer'

const rootReducer = combineReducers({
    quote : quoteReducer,
    death : deathReducer,
    character : cReducer,
})

export default rootReducer;