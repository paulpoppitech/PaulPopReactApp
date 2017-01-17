const defaultState = {
  user: null,
  isError: null
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'user/LOGIN_SUCCESS': {
      state = {
        ...state,
        user: action.payload.data,
        isError: false
      };
      break;
    }
    case 'user/LOGIN_FAIL': {
      state = {
        ...state,
        isError: true
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
}
