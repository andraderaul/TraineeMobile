import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createUser: ['username','email','password'],
})

export const UserTypes = Types

// Usado para criar as ações que serão lançadas pelos telas
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  email: null,
  password: null,
})

/* ------------- Selectors ------------- */

// export const UserSelectors = {
//   email: state => state.user.email
// }

/* ------------- Reducers ------------- */

  
export const createUser = (state, { username, email, password }) => 
  state.merge({ username, email, password })
  
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER]: createUser,
})
