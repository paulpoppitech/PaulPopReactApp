const defaultState = {
  cars: [],
  selectedCar: null,
  carErrors: null
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'car/GET_ALL_SUCCESS': {
      console.log('adadadad',action.payload)
      state = {
        ...state,
        cars: action.payload.data
      };
      break;
    }
    case 'car/GET_ALL_FAIL': {
      state = {
        ...state,
        carErrors: action.payload.data.message
      };
      break;
    }
    case 'car/GET_CAR_SUCCESS': {
      state = {
        ...state,
        selectedCar: action.payload.data
      };
      break;
    }
    case 'car/GET_CAR_FAIL': {
      state = {
        ...state,
        carErrors: action.payload.data.message
      };
      break;
    }
    case 'car/REMOVE_SELECTED_CAR': {
      state = {
        ...state,
        selectedCar: null
      };
      break;
    }
    case 'car/DELETE_FAIL': {
      state = {
        ...state,
        carErrors: action.payload.data.message
      };
      break;
    }
    case 'car/ADD_FAIL': {
      state = {
        ...state,
        carErrors: action.payload.data.message
      };
      break;
    }
    case 'car/EDIT_FAIL': {
      state = {
        ...state,
        carErrors: action.payload.data.message
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
}
