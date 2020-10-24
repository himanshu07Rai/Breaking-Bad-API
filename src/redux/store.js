import {createStore, applyMiddleware} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import quoteReducer  from './quote/quoteReducer';
import thunk from 'redux-thunk'

const store = createStore(quoteReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;