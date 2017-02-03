'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {
  StyleSheet,
  ListView,
  TextInput,
  TouchableHighlight,
  Text,
  View,
  BackAndroid
} from 'react-native';

import Button from 'react-native-button';

import * as GoodActions from '../actions/good';

class GoodList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      lastValue: null

    };
  }

  componentWillMount() {
    this.props.getGoods(this.state.lastValue);
  }

  componentWillReceiveProps(np) {
    if (np.good.buySuccess == true && this.props.good.buySuccess == null) {
      this.props.getGoods(this.state.lastValue);
    }
    if (np.good.sellSuccess == true && this.props.good.sellSuccess == null) {
      this.props.getGoods(this.state.lastValue);
    }
  }

  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop();
        return true;
      }
      return false;
    });
  }

  navigate(routeName, data) {
    this.props.navigator.push({
      name: routeName,
      data: data
    });
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    let lapsList = this.props.good.goods.map((data, index) => {
      return (
        <View key={index}>
          <Button onPress={ this.navigate.bind(this, 'editGood', data) }>{data.name + ' q:' + data.quantity + ' ' + data.price + '$'}</Button>
        </View>
      )
    })

    return  (
      <View style={styles.container}>
        <Text style={styles.heading}>
          goods list:
        </Text>
        {
          !this.props.good.goodErrors ?
            lapsList : (
            <Text style={styles.heading}>
              {this.props.good.goodErrors}
            </Text>)
        }

        <Button onPress={ this.navigate.bind(this, 'sellGood') }>Sell good</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(GoodList);
