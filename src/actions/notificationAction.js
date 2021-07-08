export default function notificationAction(notification) {
  return {
    type: 'NOTIFY',
    payload: notification,
  }
}
