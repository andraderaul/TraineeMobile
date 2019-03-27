import { createStackNavigator, createAppContainer } from 'react-navigation'
import CadastroScreen from '../Containers/CadastroScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  CadastroScreen: { screen: CadastroScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CadastroScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
