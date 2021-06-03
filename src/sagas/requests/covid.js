import axios from 'axios'

export function requestCovidData(){
    return axios.request({
        method:"get",
        url:"https://api.covid19india.org/data.json"
    })
}