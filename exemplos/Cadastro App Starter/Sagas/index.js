import { takeLatest, all } from 'redux-saga/effects'

// Lembre de importar sua API

import API from '../Services/Api'

/* ------------- Types ------------- */

// Lembre de importar os tipos das suas ações

import { StartupTypes } from '../Redux/StartupRedux'
import { UserTypes } from '../Redux/UserRedux'

/* ------------- Sagas ------------- */

// Lembre de importar os sagas a qual você irá ligar suas ações

import { startup } from './StartupSagas'

/* ------------- API ------------- */

// Lembre de criar suas APIs

// O ignite monta o APP de tal forma que nossa API só é acessada através do Saga
// Então não tem problema criar a API aqui nesse arquivo

const _api = API.create()

/* ------------- Connect Types To Sagas ------------- */

// Crie um link entre a ação que você despacha e o saga que é desencadeado
// O takeLatest só considera a última instância da ação em questão

export default function * root () {
  yield all([
    
    // Os sagas que não precisam acessar a API não precisam recebê-la como parâmetro
    takeLatest(StartupTypes.STARTUP, startup),
    //takeLatest(StartupTypes.STARTUP, startup, _api),
  
  ])
}
