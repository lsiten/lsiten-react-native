import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import HomeStack from './home';
import UserStack from './user';

const TabNav = createAppContainer(createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: () => ({
      tabBarLabel: '首页'
    })
  },
  User: {
    screen: UserStack,
    navigationOptions: () => ({
      tabBarLabel: '我的'
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
}));

export default TabNav
