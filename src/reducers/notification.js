export default function notification(state = null, action) {
  if (action.type === 'NOTIFY') {
    return action.payload
  }
  return state
}
