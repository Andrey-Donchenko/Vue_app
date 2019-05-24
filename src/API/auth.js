import { apiHandle } from '../utils/apiHandle'
import { URL, prefixV1 } from '../constants'

export const logIn = data =>
  apiHandle('post', `${URL}${prefixV1}validate`, data)
