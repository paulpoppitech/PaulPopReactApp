'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

import * as CarActions from '../actions/car';

class CarList extends Component {
  constructor(){
    super();
    this.edit = this.edit.bind(this);
    this.state = {
      cars: [
        {
          mark: 'Audi',
          model: 'A4'
        },
        {
          mark: 'Mazda',
          model: '2'
        },
        {
          mark: 'Skoda',
          model: 'Octavia'
        }
      ],
      newCar: ''
    }
  }

  componentWillMount() {
    this.props.getCars();
  }

  delete(id) {
    this.props.deleteCar(id).then((data) => {
      this.props.getCars();
    });
  }

  saveCar() {
    var newCar = this.state.newCar.split(" ");
    this.props.addCar(newCar[0], newCar[1]).then((data) => {
      this.props.getCars();
      this.setState({newCar: ''})
    });
  }

  navigate(routeName, data, index) {
    this.props.navigator.push({
      name: routeName,
      data: data,
      callback: this.edit,
      carIndex: index
    });
  }

  edit(carMark, carModel, carId) {
    this.props.editCar(carId, carMark, carModel).then((data) => {
      this.props.getCars();
    });
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {

    console.log('mda', this.props.car.cars)

    let lapsList = this.props.car.cars.map((data, index) => {
      return (
        <View key={index}>
          <Button onPress={ this.navigate.bind(this, 'editCar', data, data._id) }>{data.model + ' ' + data.mark}</Button>
          <Button onPress={ this.delete.bind(this, data._id) }>Delete</Button>
        </View>
      )
    })


    return  (
      <View style={styles.container}>
        <TextInput
          style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newCar) => this.setState({newCar})}
          value={this.state.newCar} />

        <Button onPress={ this.saveCar.bind(this) }>Save</Button>

        <Text style={styles.heading}>
          Car list:
        </Text>
        {
          !this.props.car.carErrors ?
          lapsList : (
            <Text style={styles.heading}>
              {this.props.car.carErrors}
            </Text>)
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
    ...CarActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
