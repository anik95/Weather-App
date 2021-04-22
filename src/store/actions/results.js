import * as actionTypes from './actionTypes'
import axios from './../../axios-weather'

export const handleSubmitSearch = (event, payload) => {
  return dispatch  => {
    event.preventDefault()
    axios({
      method: 'get',
      url: `/data/2.5/weather?q=${payload.searchVal}&appid=${payload.key}`
    }).then(res => {
      const searchData = {
        id: payload.submitCount,
        city: res.data.name,
        country: res.data.sys.country,
        temperature: (res.data.main.temp - 273.15).toFixed(0),
        feelsLike: (res.data.main.feels_like - 273.15).toFixed(0),
        weather: res.data.weather[0].main,
        icon: res.data.weather[0].icon
      }
      dispatch(updateResults(searchData))
    }).catch(() => {
      console.log('error')
    })
  }
}

const updateResults = (searchData) => {
  return {
    type: actionTypes.UPDATE_RESULTS,
    value: searchData
  }
}