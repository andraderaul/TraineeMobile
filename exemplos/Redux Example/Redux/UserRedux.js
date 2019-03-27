import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    createUser: ['username','password'],
})

export const UserTypes = Types

// Muito útil para os componentes
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    username: null,
    password: null,
})

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// }

/* ------------- Reducers ------------- */

// request the avatar for a user
export const createUser = (state, { username, password }) => {
    console.log(username)
    console.log(password)
    return state.merge({ username, password })
}
  

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CREATE_USER]: createUser,
})
