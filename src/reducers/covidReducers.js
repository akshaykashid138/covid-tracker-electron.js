const initialData={
    countryData:"",
    stateData:[]
}

const SET_COUNTRY_DATA="SET_COUNTRY_DATA"
const SET_STATE_DATA="SET_STATE_DATA"

const covidReducers=(state=initialData,action)=>{
    switch(action.type){
        case SET_COUNTRY_DATA:
            return{
                ...state,
               countryData:action.countryData
            }

            case SET_STATE_DATA:
                
                return{
                    ...state,
                    stateData:action.stateData
                }
    
        default: return state
    }
}

export default covidReducers