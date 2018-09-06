import * as types from './types'
import Axios from '../../lib/axios'
import { URLReplacer } from '../../lib/util'

import {
  FETCHING_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  RECEIVE_PLANETS_GET_ERROR
} from '../mutations/types'

export default {
  [types.FETCH_PLANETS]: ({commit}, url = 'planets') => {
    url = URLReplacer(url)
    let data = {
      items: [],
      pagination: {}
    }
    commit(FETCHING_PLANETS)
    Axios.get(url)
      .then(res => res.data)
      .then(res => {
        data.items = res.results
        delete res.results
        data.pagination = res
        commit(RECEIVE_PLANETS_SUCCESS, data)
      })
      .catch(() => {
        commit(RECEIVE_PLANETS_GET_ERROR)
      })
  }
}