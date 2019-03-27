# Comandos para geração de componentes/containers/screens novos

- ignite generate component NomeDoComponente
- ignite generate container NomeDoComponente
- ignite generate screen NomeDoComponente

Ao gerar com o ignite e não manualmente, será gerado também o arquivo de Style e no caso de Containers e Screens, seus componentes serão inseridos dentro do Stack Navigator automaticamente. Logo, você poderá navegar de outra tela para a tela nova sem fazer nenhuma configuração a mais.

# Mudar o componente que será exibido na tela inicial

No arquivo App/Navigation/AppNavigation.js, localize a linha...

initialRouteName: 'NomeDaTelaInicial'

... e troque pelo nome do componente que você quer.

# Separação Container/Component

## Component

- O component CadastroScreen fica responsável somente pela apresentação da tela
- Não cuida de nenhuma lógica, nem guarda nenhum estado local, nem acessa o estado global
- Implementada usando um componente funcional
- Todos os dados pedidos pelos componentes da tela (propriedades do text input e do button) são passados para o componente pelo container

## Container

- O container CadastroScreen importa o componente Cadastro Screen e retorna somente ele
- Cuida de toda a lógica, guarda todo estado local ligado aos text input, e tem acesso ao estado global
- Implementado usando um compoenente de classe
- É nele que se encontra implementadas todas as funções e guardados todos os dados pedidos pelos componentes filho renderizados pelo componente Cadastro Screen
- Ele passa todos esses dados para o componente Cadastro Screen através de props

# PropTypes

Essa biblioteca cuida de verifiar os tipos dos dados passados por props, e de lançar warnings caso algum prop obrigatório não for passado. Também cuida de setar valores padrão para os props.

# Debuggar

Com o emulador do Android selecionado, pressione: CTRL + M
Na lista que aparecer, pressione "Enable Remote Debugging".

## No Chrome

Caso nenhum outro debuggador estiver aberto, por padrão o Chrome é aberto. Abre as ferramentas do desenvolvimento do Chrome e mude para a aba "Console". O app conectará automaticamente.

## Reactotron

Acompanha de forma cronológica as ações lançadas ao Redux. O ignite configura o uso do Reactotron para nós, então basta baixar o programa (link nas referências), abrir, e usar. Para evitar conflitos com o Chrome, abra o Reactotron antes de dá o comando react-native start ou react-native run-android.

## React Native Debugger

Mais completo que o Reactotron, mas necessita de configuração. Vem com console integrado. Além de acompanhar as ações lançadas, mostra também o estado central a toda etapa.

No arquivo App/Redux/CreateStore.js, localize as linhas...

if (ReduxPersist.active) {
  enhancers.push(autoRehydrate())
}

... Logo em baixo delas, insira:

/* ------------- React Native Debugger Enhancer ------------- */

enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

Cuidado! Caso você compartilhe seu código com alguém que não esteja usando o RND, será lançado um erro. Comentar essa linha soluncionará-lo. Para evitar conflitos com o Chrome, abra o RND antes de dá o comando react-native start ou react-native run-android.

# Referências

TextInput: [https://facebook.github.io/react-native/docs/textinput]
Button: [https://facebook.github.io/react-native/docs/button.html]
Redux: [https://redux.js.org]
Reduxsauce: [https://github.com/infinitered/reduxsauce]
PropTypes: [https://github.com/facebook/prop-types]
Por trás do Redux, aulas pelo criador da biblioteca:
[https://egghead.io/lessons/react-redux-the-single-immutable-state-tree]
Reactotron: [https://github.com/infinitered/reactotron]
React Native Debugger: [https://github.com/jhen0409/react-native-debugger]
