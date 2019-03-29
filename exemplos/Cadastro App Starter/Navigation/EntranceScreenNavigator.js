// Configuration
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

// Presentation
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../Themes'

// Screens
import LoginScreen from '../Containers/LoginScreen'
import CadastroScreen from '../Containers/CadastroScreen'

const EntranceScreenNavigator = createBottomTabNavigator({
    // Create tabs and assign them components
    Cadastro: CadastroScreen,
    Login: LoginScreen,
  }, {
    // Customize your navigations and tab bar options
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName
        if (routeName === 'Cadastro') {
          iconName = 'user-plus'
        } else if (routeName === 'Login') {
          iconName = 'user'
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.purple,
      inactiveTintColor: 'gray',
    },
  }
);
  
export default createAppContainer(EntranceScreenNavigator);