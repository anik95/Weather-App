import * as actionTypes from './../actions/actionTypes'

const initialState = {
  results: []
}

const recentSearches = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS:
      return {
        results: [
          ...state.results,
          action.value
        ]
      }
    default:
      return state
  }
}

export default recentSearches