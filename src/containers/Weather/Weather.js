import React, { useState, useEffect } from 'react'
import classes from './Weather.module.scss'
import axios from './../../axios-weather'
import SearchCity from '../../components/SearchCity/SearchCity'
import RecentSearches from '../../components/RecentSearches/RecentSearches'
import * as actionTypes from './../../store/actions/actionTypes'
import * as actionCreators from './../../store/actions/index'
import { connect } from 'react-redux'

const Weather = props => {
  const [ApiKey] = useState('1f00c8ba469532cea2af5aa6bf3758fd')
  const [city, setCity] = useState('')
  const [results, setResults] = useState([])
  const [submitCount, setSubmitCount] = useState(0)
  const unit = <span>°C</span>
  
  useEffect(() => {
    handleCityChange('')
    props.handleSubmitCounter()
  }, [props.results])
  //
  const handleCityChange = val => {
    setCity(val)
  }
  //
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   axios({
  //     method: 'get',
  //     url: `/data/2.5/weather?q=${props.searchVal}&appid=${ApiKey}`
  //   }).then(res => {
  //     const searchData = {
  //       id: props.submitCount,
  //       city: res.data.name,
  //       country: res.data.sys.country,
  //       temperature: (res.data.main.temp - 273.15).toFixed(0),
  //       feelsLike: (res.data.main.feels_like - 273.15).toFixed(0),
  //       weather: res.data.weather[0].main,
  //       icon: res.data.weather[0].icon
  //     }
  //     setResults([searchData,...results])
  //   }).catch(() => {
  //     console.log('error')
  //   })
  // }
  
  return (
    <div className={classes.Weather}>
      <h1 className={classes.Title}>Simple Weather App</h1>
      <SearchCity
        name={city}
        change={(event) => handleCityChange(event.target.value)}
        // submitSearch={(event) => props.handleSubmit(event, { searchVal: props.searchVal, submitCount: props.submitCount, key: ApiKey, results: props.results })}
        submitSearch={(event) => props.handleSubmit(event, { searchVal: city, submitCount: props.submitCount, key: ApiKey, results: props.results })}
      />
      <RecentSearches
        results={props.results}
        unit={unit}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    submitCount: state.weather.submitCount,
    searchVal: state.weather.searchVal,
    results: state.res.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitCounter: () => dispatch(actionCreators.incrementCounter()),
    handleSubmit: (event, payload) => dispatch(actionCreators.handleSubmitSearch(event, payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)