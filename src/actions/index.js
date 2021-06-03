export const GET_COUNTRY_DATA="GET_COUNTRY_DATA"
export const GET_STATE_DATA="GET_STATE_DATA"
const SET_COUNTRY_DATA="SET_COUNTRY_DATA"
const SET_STATE_DATA="SET_STATE_DATA"

export const getCountryData=()=>{
    return{
        type:GET_COUNTRY_DATA
    }
    
}

export const getStateData=()=>{
    return{
        type:GET_STATE_DATA
    }
    
}

export const setCountryData=(countryData)=>{
    return{
        type:SET_COUNTRY_DATA,
        countryData
    }
}

export const setStateData=(stateData)=>{
    return {
        type:SET_STATE_DATA,
        stateData
    }
}

