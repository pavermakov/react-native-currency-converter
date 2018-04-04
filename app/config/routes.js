import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import CurrencyList from '../screens/CurrencyList';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
}, {
  headerMode: 'screen',
});

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({ headerTitle: navigation.state.params.title }),
  }
});

export default StackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: { paddingTop: StatusBar.currentHeight },
});
