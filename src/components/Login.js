'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Linking,
  TextInput,
  BackAndroid
} from 'react-native';

import Button from 'react-native-button';

import * as UserActions from '../actions/user';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      password: null
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  handleLogin() {
    this.props.login(this.state.user, this.state.password).then((data) => {
      if (data.payload.data) {
        this.navigate('root');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(user) => this.setState({user: user})}
          value={this.state.user}
        />
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password: password})}
          value={this.state.password}
        />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.handleLogin()}>
          Login!
        </Button>
        { this.props.user.isError ?
          <Text style={styles.title}>Wrong Credentials</Text> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 180
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});


function mapStateToProps (state) {
  return {...state};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...UserActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
