// Cuida de lógica, de acesso ao redux
import React, { Component } from 'react'
import { Alert } from 'react-native'

// Redux
import { connect } from 'react-redux' 
import UserActions from '../Redux/UserRedux'

// Custom components
import CadastroScreenComponent from '../Components/CadastroScreen'

class CadastroScreenContainer extends Component {

  state = {
    username: '',
    email: '',
    password: '',
  }

  // Setter
  // Função que retorna função
  // Função recebe o tipo de estado (username, email, ou password)
  // Retorna uma função que faz set(val) do tipo correto
  // setStateValue()
  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  }

  setEmailWithSuggestion = () => {
    this.setState({ email: this.props.emailSuggestion })
    this.props.clearEmailSuggestion()
  }

  // Getter
  // getStateValue()
  // Função passa valor do estado para a função despachante
  verifyEmail = () => {
    this.props.verifyEmail(this.state.email)
  }

  // Verificação de dados
  onPress = () => {
    
    // Caso todos os campos foram minimamente preenchidos
    if (this.state.username != '' && this.state.email != '' && this.state.password != '') {

      // Enviar para o redux
      this.props.onPress(this.state.username, this.state.email, this.state.password)
    } else {

      // Android permite no máx três botões num alerta
      Alert.alert(
        'Campos não preenchidos',                                   // Título
        'Por favor, preencha todos os campos do seu cadastro.',     // Mensagem
        [{text: 'OK', onPress: () => {}}],                          // Array de botões
        {cancelable: false},
      )
    }
  }

  render () {
    return (
      <CadastroScreenComponent
        onPress={this.onPress}
        verifyEmail={this.verifyEmail}
        getHandler={this.getHandler}
        onPressEmailSuggestion={this.setEmailWithSuggestion}
        email={this.state.email}
        emailValid={this.props.emailValid}
        emailSuggestion={this.props.emailSuggestion}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  emailSuggestion: state.user.email.suggestion,
  emailValid: state.user.email.valid,
})

// Funções despachantes
const mapDispatchToProps = (dispatch) => ({
  onPress: (username, email, password) => {
    dispatch(UserActions.signupUser(username, email, password))
  },
  verifyEmail: (email) => {
    dispatch(UserActions.verifyEmail(email))
  },
  clearEmailSuggestion: () => {
    dispatch(UserActions.clearEmailSuggestion())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroScreenContainer)

