// Componente funcional
import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, Text } from 'react-native'

// Custom components
import UserInput from '../Components/UserInput'

import styles from './Styles/CadastroScreenStyle'

const CadastroScreen = (props) => {

  passwordInput = null
  emailInput = null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      
      {/* Username input */}
      <UserInput
        returnKeyType='next'
        style={styles.topInput}
        onSubmitEditing={() => {emailInput.focus()}}      // Pular pro próximo componente
        onChangeText={props.getHandler('username')}
        placeholder={"Enter a username"}
      />

      {/* Email input */}
      <UserInput
        reference={(input) => {emailInput = input}}       // Pegar referência
        returnKeyType='next'
        style={styles.topInput}
        onChangeText={props.getHandler('email')}
        onSubmitEditing={() => { passwordInput.focus() }}   // Pular pro próximo componente
        placeholder={"Enter an email"}
      />
      
      {/* Password input */}
      <UserInput
        reference={(input) => {passwordInput = input}}    // Pegar referência
        returnKeyType='go'
        style={styles.bottomInput}
        onChangeText={props.getHandler('password')}
        onSubmitEditing={props.onPress}
        placeholder={"Enter a password"}
        secureTextEntry={true}
      />

      <Button
        onPress={props.onPress}
        style={styles.button}
        title={"Cadastrar"}
        color={styles.button.color}
      />
    </View>
  )

}

CadastroScreen.propTypes = {
  onPress: PropTypes.func.isRequired,
  getHandler: PropTypes.func.isRequired,
}

export default CadastroScreen