import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCountryData,getStateData} from '../actions/index'
import './style.css'

const Covid = () => {
    
    const countryData=useSelector((state)=> state.covidReducers.countryData) 
    const stateData=useSelector((state)=> state.covidReducers.stateData)
 
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getStateData())
       dispatch(getCountryData())   
    },[dispatch])

    return (
        <>
        <h2 className="bg-warning" >Covid Tracker</h2>
        <div className='container mt-4'>
            
            <div className='row mt-4'>
           
                <div id="card1" className="col mt-2">
                <div className="card" id="content1">
                    <div className="card-body">
                        <h2 className="card-title">Confirmed</h2>
                        <h1>{countryData.confirmed}</h1>
                    </div>
                    </div>
                </div>
                <div className="col mt-2 ml-2" id="card2">
                <div className="card" id="content2">
                    <div className="card-body">
                        <h2 className="card-title">Active</h2>
                        <h1>{countryData.active}</h1>
                    </div>
                    </div>
                </div>
                <div className="col mt-2" id='card3'>
                <div className="card" id="content3">
                    <div className="card-body">
                        <h2 className="card-title">Recovered</h2>
                        <h1>{countryData.recovered}</h1>
                    </div>
                    </div>
                </div>
                <div className="col mt-2 ml-2" id='card4'>
                <div className="card" id="content4">
                    <div className="card-body">
                        <h2 className="card-title">Deaths</h2>
                        <h1>{countryData.deaths}</h1>
                    </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <table className="table mt-4">
                <thead className='thead-dark'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">State</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Active</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         stateData.map((data,index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td className="font-monospace">{data.state}</td>
                            <td className="font-monospace">{data.confirmed}</td>
                            <td className="font-monospace">{data.active}</td>
                            <td className="font-monospace">{data.recovered}</td>
                            <td className="font-monospace">{data.deaths}</td>
                            </tr>
                       ))}
                </tbody>
             </table>
        </div>
        </>
    )
}

export default Covid
