// //import {delay} from 'redux-saga'
// import {takeEvery,put,call} from 'redux-saga/effects'
// import { getCountryData,getStateData } from '../actions'

// //import {getCountryData, getStateData} from '../actions/index'

// function* handleCountryData(){
//    // yield delay(4000)
//     //yield put({type:"GET_COUNTRY_DATA_ASYNC"})
//     yield put(getCountryData())
// }

// function* handleStateData(){
//      //yield put({type:"GET_STATE_DATA_ASYNC"})
//      yield put(getStateData())
//  }

// export function* rootSaga(){
//     yield takeEvery('GET_COUNTRY_DATA',handleCountryData)
//     yield takeEvery('GET_STATE_DATA',handleStateData)
// }

import {takeLatest} from 'redux-saga/effects'
import {GET_COUNTRY_DATA, GET_STATE_DATA} from '../actions/index'
import { handleGetCovid } from './handlers/covid'

export function* watcherSaga(){
    
    yield takeLatest(GET_STATE_DATA,handleGetCovid)
    yield takeLatest(GET_COUNTRY_DATA,handleGetCovid)
}