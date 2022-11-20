import { combineReducers } from 'redux'

import commentsReducer from './commentsReducer'

const reducer = combineReducers({
  comments: commentsReducer,
})

export default reducer
