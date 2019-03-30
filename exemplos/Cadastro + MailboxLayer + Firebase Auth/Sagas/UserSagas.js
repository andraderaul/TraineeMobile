import { put, select, call } from 'redux-saga/effects'
import UserActions, { UserSelectors } from '../Redux/UserRedux'

// Put -> lança ações para o redux, como o dispatch()
// Select -> Busca informações do estado central que não estão na sua ação
// Call -> Efetua chamadas à API

// Pode receber uma api e uma ação
// Isso é configurado no Sagas/index.js
export function * verifyEmail (api, { email }) {

//   let username = yield select(UserSelectors.username)
//   console.tron.log(username)

  let response = yield call(api.verifyEmail, email)
  if (response.ok) {

    let { did_you_mean, smtp_check } = response.data
    let suggestion = did_you_mean
    let valid = smtp_check

    yield put(UserActions.putEmailVerificationResult(valid, suggestion))
  }
}

// Como a API do firebase não foi consruída pelo apisauce, temos que tratá-la de forma diferente
export function * signupUser (api, { username, email, password }) {
  
  // Criar conta
  // A api retorna um Promise
  // Caso seja criada com sucesso, não retorna nenhum valor e faz o login do usuário automaticamente
  // Caso ocorra um erro, é lançada uma excessão, que deve ser tratada num .catch()

  let errorMessage = null

  // Yeild não funciona dentro do callback, logo extraia a mensagem de erro e faça yield após o retorno da função
  // Veja todos os erros que podem occorrer aqui: 
  // [https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword]

  // Extrair
  yield api.signupUser(email, password)
    .catch((error) => { errorMessage = error.message })   

  // Fazer yield
  if (errorMessage != null) {
    yield put(UserActions.putError(errorMessage))
  }

  // Setar o username

  // Busca o usuário que está logado
  // Valor talvez seja null

  let user = yield api.getUser()

  if (user != null) {
    user.updateProfile({
      displayName: username,
    })
  }
}
  
