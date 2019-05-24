import authActions from './authActions'
import profileActions from './profileActions'
import newsActions from './newsActions'

export default {
  ...authActions,
  ...profileActions,
  ...newsActions
}
