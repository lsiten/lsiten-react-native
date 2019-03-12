import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Home from '../pages/Home/Index';

export default createAppContainer(createStackNavigator({
  index: {
    screen: Home
  }
}))
