import {createStore,applyMiddleware} from 'redux'

import rootReducer from './reducers/index'


import createSagaMiddleware from 'redux-saga'

import {watcherSaga} from './sagas/index'
const sagaMiddleware=createSagaMiddleware()



const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)


export default store