import React from 'react'
import classes from './RecentSearches.module.scss'

const RecentSearches = ({ results, unit }) => {
  return (
    <div className={classes.ResultsContainer}>
      <ul className={classes.Results}>
        {
          results.map((result, index) => {
            return (
              <li className={classes.Result} key={result.id}>
                <div className={classes.Location}>
                  <span className={classes.City}>{result.city}</span>
                  <span className={classes.Country}>{result.country}</span>
                </div>
                <div className={classes.Temperature}>
                  <p className={classes.CurrentTemperature}>{result.temperature} <span>{unit}</span></p>
                  <p className={classes.FeelsLike}>Feels like {result.feelsLike}<span>{unit}</span></p>
                </div>
                <img className={classes.WeatherIcon} src={`http://openweathermap.org/img/w/${result.icon}.png`}
                     alt="weather-icon"/>
                <p className={classes.CurrentCondition}>{result.weather}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default RecentSearches