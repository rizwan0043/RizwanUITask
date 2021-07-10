import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PAGES from './pages/index';
import HomePage from './src/HomePage/Index';
import ProductPage from './src/ProductPage/Index';


const DashboardNavigator = createStackNavigator(
  {
    HomePage: {
      screen: PAGES.HomePage,
    },
    ProductPage: {
      screen: PAGES.ProductPage,
    },
  },
  {
    headerMode: 'none',
    // initialRouteName: 'HomePage',
    // defaultNavigationOptions: {
    //   gestureEnabled: false,
    //   swipeEnabled: false,
    // },
    // navigationOptions: {
    //   gestureEnabled: false,
    //   drawerLockMode: 'locked-closed',
    // },
  },
);

const AppContainer = createAppContainer(DashboardNavigator);

class App extends Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
    <AppContainer />
    );
  }
}
export default App;