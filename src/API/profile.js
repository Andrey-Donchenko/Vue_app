import { apiHandle } from '../utils/apiHandle'
import { URL, prefixV1 } from '../constants'

export const getUserData = userId =>
  apiHandle('get', `${URL}${prefixV1}user-info/${userId}`)
