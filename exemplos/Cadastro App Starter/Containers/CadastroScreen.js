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

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
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
        getHandler={this.getHandler}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  onPress: (username, email, password) => {
    dispatch(UserActions.createUser(username, email, password))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroScreenContainer)

