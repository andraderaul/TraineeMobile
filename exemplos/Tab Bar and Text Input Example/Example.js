import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

import styles from './Styles/TabBarExampleStyle'

class Screen1 extends React.Component {

  state = {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  }

  onChangeText1 = (text) => { this.setState({ text1: text}) }
  onChangeText2 = (text) => { this.setState({ text2: text}) }
  onChangeText3 = (text) => { this.setState({ text3: text}) }
  onChangeText4 = (text) => { this.setState({ text4: text.toUpperCase() }) }

  onSubmitEditing1 = () => { 
    this.props.navigation.navigate('Screen2', { text: this.state.text1 })
  }
  onSubmitEditing2 = () => { 
    this.props.navigation.navigate('Screen2', { text: this.state.text2 })
  }
  onSubmitEditing3 = () => { 
    this.props.navigation.navigate('Screen2', { text: this.state.text3 })
  }
  onSubmitEditing4 = () => { 
    this.props.navigation.navigate('Screen2', { text: this.state.text4 })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          selectionColor={'#8a2be2'}
          underlineColorAndroid={'#8a2be2'}
          placeholder={"Escreva uma linha aqui e pressione enter"}
          returnKeyType='send'      // Ícone de retorno do teclado
          autoFocus={true}          // Selecione o input automaticamente quando o componente for montado
          onChangeText={this.onChangeText1}
          onSubmitEditing={this.onSubmitEditing1}
        />

        <TextInput 
          selectionColor={'#00ffff'}
          underlineColorAndroid={'#00ffff'}
          returnKeyType='go'      // Ícone de retorno do teclado
          placeholder={"Escreva um parágrafo aqui e pressione enter"}
          multiline={true}        // Escreva em várias linhas
          numberOfLines={10}      // No máximo 5 
          blurOnSubmit={true}     // Importante pro botão de retorno!
          onChangeText={this.onChangeText2}
          onSubmitEditing={this.onSubmitEditing2}
        />


        <TextInput 
          selectionColor={'#ff7f50'}
          underlineColorAndroid={'#ff7f50'}
          placeholder={"Escreva um segredo aqui e pressione enter"}
          returnKeyType='done'        // Ícone de retorno do teclado
          secureTextEntry={true}      // Usado para senhas
          onChangeText={this.onChangeText3}
          onSubmitEditing={this.onSubmitEditing3}
        />

        <TextInput 
          selectionColor={'#ff1493'}
          underlineColorAndroid={'#ff1493'}
          placeholder={"Escreva e descubra, depois pressione enter"}
          returnKeyType='next'        // Ícone de retorno do teclado
          onChangeText={this.onChangeText4}
          value={this.state.text4}     // Controla o valor mostrado
          onSubmitEditing={this.onSubmitEditing4}
        />

      </View>
    );
  }
}

class Screen2 extends React.Component {
  render() {

    const { navigation } = this.props
    const text = navigation.getParam('text')

    return (
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;

      let iconName
      if (routeName === 'Screen1') {
        iconName = 'cloud-lightning'
      } else if (routeName === 'Screen2') {
        iconName = 'cloud-rain'
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

);

export default createAppContainer(TabNavigator);