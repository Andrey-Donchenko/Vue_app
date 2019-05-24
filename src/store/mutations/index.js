import otherMutations from './otherMutations'
import authMutations from './authMutations'
import profileMutations from './profileMutations'
import newsMutations from './newsMutations'

export default {
  ...otherMutations,
  ...authMutations,
  ...profileMutations,
  ...newsMutations
}
