const initialState = {
  loading: false,
  user: {
    userId: '',
    avatar_url: '',
    name: '',
    bio: '',
    repos: [],
    commits: [],
  },
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    case 'CLEAN_USER':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
