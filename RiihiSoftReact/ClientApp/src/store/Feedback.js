import FeedbackService from '../services/FeedbackService'


export const ActionForCreating = (feedback) => {
  return async (dispatch) => {

    await FeedbackService.Create(feedback)
    const newState = getFeedbackArray(await FeedbackService.GetAll())
    dispatch({
      type: 'CREATE',
      data: newState
    })
  }
}
export const ActionForGetAll = () => {
  return async (dispatch) => {
    const feedbacks = getFeedbackArray(await FeedbackService.GetAll())
    dispatch({
      type: 'GETALL',
      data: feedbacks
    })
  }
}
const getFeedbackArray = (feedbacks) => {
  let arr = []
  for (var feedback in feedbacks) {
    arr.push(feedbacks[feedback])
  }
  console.log(arr)
  return arr
}
export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return action.data
    case 'GETALL':
      return action.data
    default:
      return state
  }
}