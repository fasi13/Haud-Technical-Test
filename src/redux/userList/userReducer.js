const initState = {
  loading: false,
  isCreateUserFetching: false,
  users: [],
  error: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    // REQUEST
    case "FETCH_USERS_START":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_USER_REQUEST":
      return {
        ...state,

        isCreateUserFetching: true,
      };
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    // SUCCESS
    case "FETCH_USERS_SUCCESS":
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
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload.newUserData,
        error: "",
      };

    // FAILURE
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CREATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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
