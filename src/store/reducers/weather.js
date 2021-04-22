import * as actionTypes from './../actions/actionTypes'

const initialState = {
  submitCount: 0,
}

const weather = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT_SUBMIT_COUNT:
      return {
        ...state,
        submitCount: state.submitCount + 1
      }
    default:
      return state
  }
}
export default weather