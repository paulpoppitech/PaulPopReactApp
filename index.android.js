import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Navigator
} from 'react-native';
import Button from 'react-native-button';

import GoodList from './src/components/GoodList';
import EditGood from './src/components/EditGood';
import SellGood from './src/components/SellGood';
import Login from './src/components/Login';
import Root from './src/components/root';

import store from './store';

export default class PaulPopReactApp extends Component {

  renderScene(route, navigator) {
    if(route.name == 'root') {
      return <Root navigator={navigator} />
    }
    if(route.name == 'goodList') {
      return <GoodList navigator={navigator} />
    }
    if(route.name == 'login') {
      return <Login navigator={navigator} />
    }
    if(route.name == 'editGood') {
      return <EditGood navigator={navigator} data={route.data} />
    }
    if(route.name == 'sellGood') {
      return <SellGood navigator={navigator} />
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator
            initialRoute={{name: 'goodList'}}
            renderScene={this.renderScene.bind(this)}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('PaulPopReactApp', () => PaulPopReactApp);
