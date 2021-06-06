

import {takeLatest} from 'redux-saga/effects'
import {GET_COUNTRY_DATA, GET_STATE_DATA} from '../actions/index'
import { handleGetCovid } from './handlers/covid'

export function* watcherSaga(){
    
    yield takeLatest(GET_STATE_DATA,handleGetCovid)
    yield takeLatest(GET_COUNTRY_DATA,handleGetCovid)
}
