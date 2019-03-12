  import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import User from '../pages/User/Index';
  export default createAppContainer(createStackNavigator({
    index: {
      screen: User
    }
  }))
  