const initState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
    case "DELETE_USER_START":
    case "FETCH_USER_REQUEST":
    case "UPDATE_USER_START":
    case "CREATE_USER_START":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USERS_SUCCESS":
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case "CREATE_USER_SUCCESS":
      let createUsers = state.users || [];
      [action.payload.userId] = action.payload.user;
      return {
        ...state,
        users: createUsers,
        error: "",
        isCreateUserFetching: false,
      };
    case "DELETE_USER_SUCCESS":
      let deleteUsers = state.users;
      delete deleteUsers[action.payload];

      return {
        ...state,
        loading: false,
        users: deleteUsers,
        error: "",
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload.newUserData,
        error: "",
      };

    case "FETCH_USERS_FAILURE":
    case "CREATE_USER_FAILURE":
    case "DELETE_USER_FAILURE":
    case "FETCH_USER_FAILURE":
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
