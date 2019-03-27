// Componente funcional
import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, Text } from 'react-native'

// Custom components
import UserInput from '../Components/UserInput'

import styles from './Styles/CadastroScreenStyle'

const CadastroScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
       <UserInput 
        returnKeyType='next'
        style={styles.topInput}
        onSubmitEditing={() => {}}
        onChangeText={props.setUsername}
        placeholder={"Enter a username"}
      />
      <UserInput
        returnKeyType='go'
        style={styles.bottomInput}
        onChangeText={props.setPassword}
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
  setPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
}

export default CadastroScreen