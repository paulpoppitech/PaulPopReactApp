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

import CarList from './src/components/CarList';
import EditCar from './src/components/EditCar';
import Root from './src/components/root';

import store from './store';

export default class PaulPopReactApp extends Component {

  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'root') {
      return <Root navigator={navigator} />
    }
    if(route.name == 'carlist') {
      return <CarList navigator={navigator} />
    }
    if(route.name == 'editCar') {
      return <EditCar navigator={navigator} car={route.data} carIndex={route.carIndex} callback={route.callback}/>
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator
            initialRoute={{name: 'root'}}
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
