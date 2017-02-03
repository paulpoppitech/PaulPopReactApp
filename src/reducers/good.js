const defaultState = {
  notes: [],
  noteErrors: null,
  canLoadMore: true,
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'note/GET_ALL_SUCCESS': {
      // console.log('adadadad',action.payload.data.notes)
      state = {
        ...state,
        notes: action.payload.data.notes,
        canLoadMore: action.payload.data.more
      };
      break;
    }
    case 'note/GET_ALL_FAIL': {
      state = {
        ...state,
        noteErrors: action.payload.data.error
      };
      break;
    }
    case 'note/DELETE_SUCCESS': {
      // console.log('adadadad',action.payload.data.notes)
      break;
    }
    case 'note/DELETE_FAIL': {
      state = {
        ...state,
        noteErrors: action.payload.data.error
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
}
