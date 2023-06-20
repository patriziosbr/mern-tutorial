import axios from 'axios'

const API_URL = '/api/event/'

// Create new events
const createEvent = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}



const evetService = {
  createEvent,

}

export default evetService
