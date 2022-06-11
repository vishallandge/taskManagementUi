import { persistReducer, persistStore } from "redux-persist";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger'
// import {createStore,applyMiddleware} from "redux";
import { legacy_createStore as createStore } from 'redux'
import reducer from './reducer.js';
import storage from 'redux-persist/lib/storage';

const logger = createLogger({});
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, composeWithDevTools());
export const persistor = persistStore(store);
