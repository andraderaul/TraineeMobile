import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import EntranceScreen from './EntranceScreenNavigator'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  EntranceScreen: { screen: EntranceScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'EntranceScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
