import * as firebase from 'firebase'
import { config } from '../Config/FirebaseConfig'

let app = firebase.initializeApp(config)

const create = () => {

  const signupUser = (email, password) => 
    firebase.auth().createUserWithEmailAndPassword(email, password)

  const signinUser = (email, password) => 
    firebase.auth().signInWithEmailAndPassword()

  // Valor talvez seja nulo
  const getUser = () => 
    firebase.auth().currentUser

  const setProfile = (user, username) => 
    user.updateProfile({
      displayName: username,
      photoURL: "",
    })

  const getProfile = (user) => ({
    username: user.displayName,
    email: user.email,
  })

  return {
    signupUser,
    signinUser,
    getUser,
    setProfile,
    getProfile,
  }
}

export default {
  create
}
