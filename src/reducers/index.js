import { combineReducers } from 'redux'

import notification from './notification'
const allReducers = combineReducers({
  notification: notification,
})

export default allReducers
