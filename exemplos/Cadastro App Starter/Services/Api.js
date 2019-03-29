
import apisauce from 'apisauce'

const create = (baseURL = 'https://api.github.com/') => {
  
  // ------
  // STEP 1
  // ------

  const api = apisauce.create({
    baseURL,
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------

  const getUserAvatar = (username) => api.get(`/users/${username}`)

  // ------
  // STEP 3
  // ------

  return {
    getUserAvatar
  }
}

export default {
  create
}
