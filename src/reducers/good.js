const defaultState = {
  goods: [],
  goodErrors: null,
  lastUpdated: null,
  buyGoods: [],
  buySuccess: null,
  sellGoods: [],
  sellSuccess: null,
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'good/GET_ALL_SUCCESS': {
      // console.log('adadadad',action.payload.data)
      state = {
        ...state,
        goods: action.payload.data,
      };
      break;
    }
    case 'good/GET_ALL_FAIL': {
      state = {
        ...state,
        goodErrors: action.error.response.data.text
      };
      break;
    }
    case 'good/BUY': {
      // state = {
      //   ...state,
      //   goods: action.payload.data,
      // };
      break;
    }
    case 'good/BUY_SUCCESS': {
      state = {
        ...state,
        buyGoods: state.buyGoods.concat(action.payload.data),
        buySuccess: true
      };
      break;
    }
    case 'good/BUY_FAIL': {
      state = {
        ...state,
        goodErrors: action.error.response.data.text
      };
      break;
    }
    case 'good/SET_BUY': {
      state = {
        ...state,
        buySuccess: null
      };
      break;
    }
    case 'good/SELL': {
      // state = {
      //   ...state,
      //   goods: action.payload.data,
      // };
      break;
    }
    case 'good/SELL_SUCCESS': {
      state = {
        ...state,
        sellGoods: state.sellGoods.concat(action.payload.data),
        sellSuccess: true
      };
      break;
    }
    case 'good/SELL_FAIL': {
      state = {
        ...state,
        goodErrors: action.error.response.data.text
      };
      break;
    }
    case 'good/SET_SELL': {
      state = {
        ...state,
        sellSuccess: null
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
}
