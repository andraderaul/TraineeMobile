import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class MyComponent extends Component {

  constructor() {
    super()
    this.testNon.bind(this)
  }

  state = {
    time: 0,
  }

  testArrow = () => {
    console.log(this)
    console.log(this.state)
  }

  testNon() {
    console.log(this)
    console.log(this.state)
  }

  render() {

    // O contexto é todos os elementos que conseguimos acessar em um certo local (ex: dentro de uma classe ou função).
    // O contexto de uma classe, por exemplo, é todos os métodos e propriedades que declaramos dentro dela,
    // e que conseguimos usar dentro de seu escopo e ao instanciar um objeto/componente.
    // No JS, acessamos um contexto com o keyword 'this'.

    return (
      <View style={{flex: 1}}>

        {/* 
          * Ao declarar um método da classe 'testNon' (sem o uso de um arrow function),
          * o contexto do método muda quando ele é passado como argumento para outro componente.
          * Nesse exemplo, o contexto que queremos (o contexto do nosso componente MyComponent)
          * é sobreescrito pelo contexto do botão 'Erro de contexto' (ao qual passamos o método).
          * Logo, não conseguimos acessar o nosso 'state'.
         */}

        <TouchableOpacity 
          onPress={this.testNon}
          style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>Erro de contexto</Text>
        </TouchableOpacity>

        {/* 
          * Usando o .bind(), conseguimos ligar o contexto que queremos ao método no momento de passar ela para outro componente. 
          * Isso também pode ser feito no contrutor do MyComponent, que na verdade é uma otimização em termos de desempenho,
          * pois a função só será chamada uma única vez, e não sempre que o componente re-renderizar.
         */}

        <TouchableOpacity 
          onPress={this.testNon.bind(this)}
          style={{flex: 1, backgroundColor: '#EEE', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>Usando o .bind()</Text>
        </TouchableOpacity>

        {/* 
          * O arrow function impede troca de contexto entre componentes. O contexto da função e de tudo em seu interior
          * sempre será o contexto em que ela foi declarada. Por isso, ao englobar o método que queremos com um arrow function,
          * sempre teremos o contexto que queremos. 
         */}

         <TouchableOpacity 
          onPress={() => { this.testNon() }}
          style={{flex: 1, backgroundColor: '#DDD', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Englobando com uma arrow function</Text>
        </TouchableOpacity>

        {/* 
          * Quando você declara uma propriedade de classe e atribui a essa propriedade uma arrow function,
          * o contexto da função/propriedade de classe sempre será o da própria classe.
          * Isso é uma otimização em termos de desempenho, pois a propriedade de classe só é criada uma vez: 
          * quando o componente é construído.
         */}

         <TouchableOpacity 
          onPress={this.testArrow}
          style={{flex: 1, backgroundColor: '#CCC', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Declarando com uma arrow function</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
