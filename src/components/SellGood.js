'use strict';
import React, { Component } from 'react';
import Button from 'react-native-button';
import { Pie } from 'react-native-pathjs-charts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  BackAndroid
} from 'react-native';

import * as GoodActions from '../actions/good';

class SellGood extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      quantity: null,
      price: null,
      isError: null
    }
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  sell() {
    this.props.sellGood(this.state.name, this.state.quantity, this.state.price);
  }

  componentWillReceiveProps(np) {
    if (np.good.sellSuccess) {
      this.props.setSell();
      this.props.getGoods(null);
      this.props.navigator.pop();

    }
  }

  render() {

    return (
      <View style={styles.container}>
        {
          this.props.good.goodErrors ? <Text style={styles.error}>{this.props.good.goodErrors}</Text> : null
        }
        <Text>{'name'}</Text>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <Text>{'quantity'}</Text>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({quantity: text})}
          value={this.state.quantity}
        />
        <Text>{'price'}</Text>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({price: text})}
          value={this.state.price}
        />
        <Button onPress={ this.sell.bind(this) }>sell</Button>

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
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

function mapStateToProps (state) {
  return {...state};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...GoodActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SellGood);
