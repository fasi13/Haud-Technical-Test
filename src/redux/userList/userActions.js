import axios from "axios";
import UserActionTypes from "./user.types";
const BASE_URL =
  "https://haud-react-test-default-rtdb.firebaseio.com/usersList";

export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = (userMap) => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: userMap,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: errorMessage,
});

export const createUserStart = () => ({
  type: UserActionTypes.CREATE_USER_START,
});

export const createUserSuccess = (userMap) => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  payload: userMap,
});

export const createUserFailure = (errorMessage) => ({
  type: UserActionTypes.CREATE_USER_FAILURE,
  payload: errorMessage,
});

export const deleteUserStart = () => ({
  type: UserActionTypes.DELETE_USER_START,
});

export const deleteUserSuccess = (userMap) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: userMap,
});

export const deleteUserFailure = (errorMessage) => ({
  type: UserActionTypes.DELETE_USER_FAILURE,
  payload: errorMessage,
});

export const updateUserStart = () => ({
  type: UserActionTypes.UPDATE_USER_START,
});

export const updateUserSuccess = (userMap) => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
  payload: userMap,
});

export const updateUserFailure = (errorMessage) => ({
  type: UserActionTypes.UPDATE_USER_FAILURE,
  payload: errorMessage,
});

export const updateUserStartAsync = (data) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    axios
      .patch(`${BASE_URL}.json`, data)
      .then((response) => {
        const userId = Object.keys(response.data)[0];
        const newUserData = response.data[userId];
        const payload = { userId, newUserData };

        dispatch(updateUserSuccess(payload));
      })
      .catch((error) => {
        dispatch(updateUserFailure(error.message));
      });
  };
};

export const deleteUserStartAsync = (userId) => {
  return (dispatch) => {
    dispatch(deleteUserStart());
    axios
      .delete(`${BASE_URL}/${userId}.json`)
      .then(() => {
        dispatch(deleteUserSuccess(userId));
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error.message));
      });
  };
};

export const createUserStartAsync = (user) => {
  return (dispatch) => {
    dispatch(createUserStart());
    axios
      .post(`${BASE_URL}.json`, user)
      .then((response) => {
        const newUser = { userId: response.data.name, user };
        dispatch(createUserSuccess(newUser));
      })
      .catch((error) => {
        dispatch(createUserFailure(error.message));
      });
  };
};

export const fetchUsersStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());
    axios
      .get(`${BASE_URL}.json`)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

export const fetchSingleUserStartAsync = (userId) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_REQUEST" });
    axios
      .get(`${BASE_URL}/${userId}.json`)
      .then((response) => {
        const user = response.data;
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: user });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USER_FAILURE", payload: error.message });
      });
  };
};
