export function addNewCommentAction(comments) {
  return {
    type: 'ADD_COMMENT',
    payload: comments,
  }
}
