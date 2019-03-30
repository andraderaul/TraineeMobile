// Componente funcional
import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, Text, TextInput, TouchableHighlight } from 'react-native'

import styles from './Styles/CadastroScreenStyle'

const CadastroScreen = (props) => {

  passwordInput = null
  emailInput = null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      
      {/* Username input */}
      <TextInput
        underlineColorAndroid={styles.underline.color}
        returnKeyType='next'
        blurOnSubmit={false}
        style={[styles.input, styles.inputContainer]}
        onSubmitEditing={() => {emailInput.focus()}}      // Pular pro próximo componente
        onChangeText={props.getHandler('username')}
        placeholder={"Enter a username"}
      />

      {/* Email input */}
      <View style={styles.inputContainer}>
        <TextInput
          ref={(input) => {emailInput = input}}       // Pegar referência
          returnKeyType='next'
          blurOnSubmit={false}
          style={styles.input}
          underlineColorAndroid={styles.underline.color}
          value={props.email}
          onChangeText={props.getHandler('email')}
          onSubmitEditing={() => { 
            props.verifyEmail()    // Verificar email
            passwordInput.focus()  // Pular pro próximo componente
          }}   
          placeholder={"Enter an email"}
        />

        {props.emailSuggestion ?
          <View style={styles.emailSuggestion}>
            <Text style={styles.suggestionText}>
              Você quis dizer: 
            </Text>
            <TouchableHighlight 
              onPress={props.onPressEmailSuggestion}>
              <Text style={[styles.suggestionText, styles.suggestionButton]}>
                {props.emailSuggestion}
              </Text>
            </TouchableHighlight>
          </View> :
          null
        }
      </View>
      
      {/* Password input */}
      <TextInput
        ref={(input) => {passwordInput = input}}    // Pegar referência
        returnKeyType='go'
        blurOnSubmit={false}
        style={[styles.input, styles.inputContainer]}
        underlineColorAndroid={styles.underline.color}
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
  verifyEmail: PropTypes.func.isRequired,
  onPressEmailSuggestion: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailSuggestion: PropTypes.string,
  emailValid: PropTypes.bool,
}

export default CadastroScreen