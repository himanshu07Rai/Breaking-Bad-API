import {createStore, applyMiddleware} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer  from './rootReducer';
import thunk from 'redux-thunk'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import firebase from '../firebase';

const rrfConfig = {
    usersProfile : 'users',
    useFirestoreForProfile : true
}


const store = createStore(
    rootReducer, 
    composeWithDevTools(
        reactReduxFirebase(firebase,rrfConfig),
        reduxFirestore(firebase),
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}))
    )
);

export default store;