const initialState = ['I love Avengers!', 'I love theater!']

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_COMMENT':
      return [...state, payload]
    default:
      return state
  }
}

export default commentsReducer
