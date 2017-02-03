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
  View
} from 'react-native';

import Button from 'react-native-button';

import * as GoodActions from '../actions/good';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class GoodList extends Component {
  constructor(props){
    super(props);
    this.state = {
      nrRow: 1,
      dataSource: ds.cloneWithRows([]),
      notes: [],
      isLoading: false,
      canLoadMore: true,
      isConnected: null,

    };

    this.getUpdatedDataSource = this.getUpdatedDataSource.bind(this);
  }

  componentWillMount() {
    console.log(this.state.nrRow)
    this.props.getNotes(this.state.nrRow).then((data) => {
      if (data.type == 'note/GET_ALL_SUCCESS') {
        this.setState({
          dataSource: ds.cloneWithRows(data.payload.data.notes),
          notes: data.payload.data.notes,
          canLoadMore: data.payload.data.more
        });
      }
    });
  }

  getUpdatedDataSource() {
    if (this.state.canLoadMore) {
      this.props.getNotes(this.state.nrRow + 1).then((data) => {
        if (data.type == 'note/GET_ALL_SUCCESS') {
          let newArray = this.state.notes.concat(data.payload.data.notes);
          this.setState({
            dataSource: ds.cloneWithRows(newArray),
            notes: newArray,
            nrRow: this.state.nrRow + 1,
            canLoadMore: data.payload.data.more,
            isLoading: false,
          });
        }

      });
    }
  }

  navigate(routeName, data) {
    this.props.navigator.push({
      name: routeName,
      data: data
    });
  }

  retry() {
    this.setState({
      dataSource: ds.cloneWithRows([]),
      notes: [],
      nrRow: 1,
      canLoadMore: true,
      isLoading: false,
    });
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return  (
      <View style={styles.container}>
        <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
        <Button onPress={ this.retry.bind(this) }>Retry</Button>
        <ListView
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          dataSource={this.state.dataSource}
          renderRow={(data) => <View><Button onPress={ this.navigate.bind(this, 'notedelete', data) }>{data.text}</Button></View>}
          canLoadMore={this.state.canLoadMore}
          onLoadMore={this.getUpdatedDataSource()}
        />
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
