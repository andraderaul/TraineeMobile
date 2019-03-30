import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  verifyEmail: ['email'],
  putEmailVerificationResult: ['valid', 'suggestion'],
  clearEmailSuggestion: null,
  signupUser: ['username','email','password'],
  putError: ['message'],
})

export const UserTypes = Types

// Usado para criar as ações que serão lançadas pelos telas
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  password: null,
  error: null,

  // Centralizar campos relacionados a email
  email: {
    text: null,
    suggestion: '',
    valid: false,
  },
})

/* ------------- Selectors ------------- */

// export const UserSelectors = {
//   username: state => state.user.username
// }

/* ------------- Reducers ------------- */

// Função que recebe uma ação e modifica o estado central

export const putError = (state, { message }) => 
  state.merge({ error: message })

export const clearEmailSuggestion = (state) => {
  let newEmail = {...state.email, suggestion: ''}
  return state.merge({ email: newEmail })
}

export const putEmailVerificationResult = (state, { valid, suggestion }) => {
  let newEmail = {...state.email, valid, suggestion}                // Mesclar o objeto antigo com o novo
  return state.merge({ email: newEmail })
}

export const verifyEmail = (state, { email }) => {
  let newEmail = {...state.email, text: email}                      // Mesclar o objeto antigo com o novo
  return state.merge({ email: newEmail })
}

export const signupUser = (state, { username, email, password }) => {
  let newEmail = {...state.email, text: email}                      // Mesclar o objeto antigo com o novo
  return state.merge({ username, email: newEmail, password })
} 
  
/* ------------- Hookup Reducers To Types ------------- */

// Criar rota entra a ação e a função que deve recebê-la

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_EMAIL_VERIFICATION_RESULT]: putEmailVerificationResult, 
  [Types.VERIFY_EMAIL]: verifyEmail,
  [Types.SIGNUP_USER]: signupUser,
  [Types.PUT_ERROR]: putError,
  [Types.CLEAR_EMAIL_SUGGESTION]: clearEmailSuggestion,
})
