import React, { Component } from 'react'; 

import { TouchableHighlight, Text, View } from 'react-native';

export default class Contador extends Component {

  state = {
    numero: 0,
  }

  maisUm = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:60}}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress = {this.maisUm}
          onLongPress={this.limpar}
        >
          <Text style={{fontSize:60}}>Incrementar</Text>
        </TouchableHighlight>
      </View>
    )
  }
 

}