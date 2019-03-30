import MailboxLayer from '../Config/MailboxLayerConfig'
import apisauce from 'apisauce'

const create = (baseURL = 'http://apilayer.net/api') => {
  
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

  const verifyEmail = (email) => api.get('/check', {
    access_key: MailboxLayer.ACCESS_KEY,
    email: email,
  })

  // ------
  // STEP 3
  // ------

  return {
    verifyEmail
  }
}

export default {
  create
}
