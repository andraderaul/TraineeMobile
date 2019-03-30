import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'

import styles from './Styles/UserInputStyle'

// Para implementar algumas funcionalidades da tela de login e cadastro,
// precisamos guardar uma referência ao componente.
// Referências só podem ser obtidas de componentes de classe, não funcionais.
// Apesar se ser implementado como componente de classe,
// esse componente ainda assim só cuida de apresentação,
// e não guarda estado nenhum.

class UserInput extends Component {

  static defaultProps = {
    placeholder: '',
    style: {},
    blurOnSubmit: false,
  }

  static propTypes = {
    placeholder: PropTypes.string,
    // Recebe um objeto ou um array de objetos
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
    ]),
    value: PropTypes.string,
    reference: PropTypes.func,
    blueOnSubmit: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
  }

  render() {
    return (  
      <TextInput 
        style={this.props.style}
        ref={this.props.reference}                    // Obter referência
        value={this.props.value}
        blurOnSubmit={this.props.blurOnSubmit}
        selectionColor={styles.input.color}
        underlineColorAndroid={styles.input.color}
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureTextEntry}
        returnKeyType={this.props.returnKeyType}
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}
      />
    )
  }
}

export default UserInput