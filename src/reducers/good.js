const defaultState = {
  goods: [],
  goodErrors: null,
  lastUpdated: null,
  buyGoods: [],
  buySuccess: null,
  sellGoods: [],
  sellSuccess: null,
  isLoading: false
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'good/GET_ALL': {
      // console.log('adadadad',action.payload.data)
      state = {
        ...state,
        goodErrors: null,
        isLoading: true,
      };
      break;
    }
    case 'good/GET_ALL_SUCCESS': {
      // console.log('adadadad',action.payload.data)
      state = {
        ...state,
        goods: action.payload.data,
        goodErrors: null,
        isLoading: false,
      };
      break;
    }
    case 'good/GET_ALL_FAIL': {
      state = {
        ...state,
        goodErrors: action.error.response.data.text,
        isLoading: false,
      };
      break;
    }
    case 'good/BUY': {
      state = {
        ...state,
        goodErrors: null,
      };
      break;
    }
    case 'good/BUY_SUCCESS': {
      state = {
        ...state,
        buyGoods: state.buyGoods.concat(action.payload.data),
        buySuccess: true,
        goodErrors: null,
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
        buySuccess: null,
      };
      break;
    }
    case 'good/SELL': {
      state = {
        ...state,
        goods: action.payload.data,
        goodErrors: null,
      };
      break;
    }
    case 'good/SELL_SUCCESS': {
      console.log(action.payload)
      state = {
        ...state,
        sellGoods: state.sellGoods.concat(action.payload.data),
        sellSuccess: true,
        goodErrors: null,
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
