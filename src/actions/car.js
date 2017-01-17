export function getCars() {
  return {
    type: 'car/GET_ALL',
    payload: {
      request: {
        method: 'get',
        url: '/cars',
      },
    }
  }
}

export function getCar(carId) {
  return {
    type: 'car/GET_CAR',
    payload: {
      request: {
        method: 'get',
        url: '/cars/' + carId,
      },
    }
  }
}

export function removeSelctedCar() {
  return {
    type: 'car/REMOVE_SELECTED_CAR',
  }
}

export function deleteCar(carId) {
  return {
    type: 'car/DELETE',
    payload: {
      request: {
        method: 'delete',
        url: '/cars/' + carId,
      },
    }
  }
}

export function addCar(carMark, carModel) {
  return {
    type: 'car/ADD',
    payload: {
      request: {
        method: 'post',
        url: '/cars',
        data: {
          'mark' : carMark,
          'model' : carModel
        }
      },
    }
  }
}

export function editCar(carId, carMark, carModel) {
  return {
    type: 'car/EDIT',
    payload: {
      request: {
        method: 'put',
        url: '/cars/' + carId,
        data: {
          'mark' : carMark,
          'model' : carModel
        }
      },
    }
  }
}
