import React from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'

import styles from './Styles/UserInputStyle'

const UserInput = (props) => {
  return (  
    <TextInput 
      style={props.style}
      ref={props.ref}
      blurOnSubmit={props.blurOnSubmit}
      selectionColor={styles.input.color}
      underlineColorAndroid={styles.input.color}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      returnKeyType={props.returnKeyType}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
    />
  )
}

UserInput.defaultProps = {
  placeholder: '',
  style: {},
}

UserInput.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  ref: PropTypes.func,
  blueOnSubmit: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

export default UserInput