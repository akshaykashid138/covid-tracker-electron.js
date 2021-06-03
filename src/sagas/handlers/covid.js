import {call, put} from 'redux-saga/effects'
import { setCountryData, setStateData } from '../../actions'
import { requestCovidData } from '../requests/covid'

export function* handleGetCovid(){
    try{
        const response=yield call(requestCovidData)
        const {data} =response
        let stData=data.statewise.filter((data,i)=> i!==0)
        yield put(setStateData(stData))
        yield put(setCountryData(data.statewise[0]))

    }catch(error){
        console.log(error)
    }
}