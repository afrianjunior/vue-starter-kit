import * as types from './types'

export default {
  [types.FETCHING_PLANETS]: (state) => {
    state.planets.status = 'fetching'
  },
  [types.RECEIVE_PLANETS_SUCCESS]: (state, { items, pagination }) => {
    state.planets.items = items
    state.planets.pagination = pagination
    state.planets.status = 'fetched'
  },
  [types.RECEIVE_PLANETS_GET_ERROR]: (state) => {
    state.planets.status = 'error'
  }
}