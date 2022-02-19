import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../redux/rootReducer'
import {
    reduxFirestore,
    getFirestore 
} from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import db from "../config/fireBase.config";


const store = createStore(
  rootReducer,
    composeWithDevTools(
      applyMiddleware(logger, thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(db)
    )
)

export default store