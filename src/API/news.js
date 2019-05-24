import { apiHandle } from '../utils/apiHandle'
import { URL, prefixV1 } from '../constants'

export const getNews = () =>
  apiHandle('get', `${URL}${prefixV1}news`)
