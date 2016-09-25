import axios from 'axios'

export const createEvent = event => () =>
  axios.post('/api/events', event)
