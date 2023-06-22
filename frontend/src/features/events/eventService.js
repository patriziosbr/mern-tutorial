import axios from 'axios'

const API_URL = '/api/event/'

// Create new events
const createEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, eventData, config)

  return response.data
}
// Update events
const updateEvent = async (eventId, eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + eventId, eventData, config)

  return response.data
}



const eventService = {
  createEvent,
  updateEvent
}

export default eventService
