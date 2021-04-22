import React from 'react'
import classes from './SearchCity.module.scss'

const SearchCity = ({ name, change, submitSearch }) => {
  return (
    <form className={classes.SearchContainer} onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Search for a city"
        onChange={change}
        value={name}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchCity