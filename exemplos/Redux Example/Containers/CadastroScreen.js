// Cuida de lógica, de acesso ao redux
import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux' 
import UserActions from '../Redux/UserRedux'

// Custom components
import CadastroScreenComponent from '../Components/CadastroScreen'

class CadastroScreenContainer extends Component {

  state = {
    username: '',
    password: '',
  }

  setUsername = (username) => {
    this.setState({username})
  }

  setPassword = (password) => {
    this.setState({password})
  }

  onPress = () => {
    this.props.onPress(this.state.username, this.state.password)
  }

  render () {
    return (
      <CadastroScreenComponent
        onPress={this.onPress}
        setUsername={this.setUsername}
        setPassword={this.setPassword}
      />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  onPress: (username, password) => {
    dispatch(UserActions.createUser(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CadastroScreenContainer)

