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

import * as NoteActions from '../actions/note';

class NoteDelete extends Component {

  constructor(props) {
    super(props);
    console.log(props, 'props')
    this.state = {
      note: props.data,
      isError: null
    }
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  delete() {
    this.props.deleteNote(this.state.note.id).then((data) => {
      if (data.type == 'note/DELETE_SUCCESS') {
        this.props.navigator.push({
          name: 'notelist'
        });
      }
    }, (error) => {
      this.setState({isError: error})
    });
  }

  render() {
    console.log(this.state, 'state');

    return (
      <View style={styles.container}>
        <Text>{this.state.note.text}</Text>
        {
          this.state.isError ? <Text>{this.state.isError}</Text> : null
        }
        <Button onPress={ this.delete.bind(this) }>Delete</Button>

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
    ...NoteActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDelete);
