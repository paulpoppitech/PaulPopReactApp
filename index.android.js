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

import NoteList from './src/components/GoodList';
import NoteDelete from './src/components/NoteDelete';
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
    if(route.name == 'notedelete') {
      console.log(route, 'route');
      return <NoteDelete navigator={navigator} data={route.data} />
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator
            initialRoute={{name: 'notelist'}}
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
