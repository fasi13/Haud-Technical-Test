import axios from 'axios'
import UserActionTypes from './user.types';
const BASE_URL = 'https://haud-react-test-default-rtdb.firebaseio.com/usersList';

export const fetchUsersStart = () => ({
	type: UserActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = userMap => ({
	type: UserActionTypes.FETCH_USERS_SUCCESS,
	payload: userMap,
});

export const fetchUsersFailure = errorMessage => ({
	type: UserActionTypes.FETCH_USERS_FAILURE,
	payload: errorMessage,
});

export const fetchUserStartAsync = () => {
	return dispatch => {
		dispatch(fetchUsersStart());
		axios
            .get(`${BASE_URL}.json`)
            .then(response => {
                const users = response.data
				dispatch(fetchUsersSuccess(users));
			})
			.catch(error => dispatch(fetchUsersFailure(error.message)));
	};
};

// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch({type: 'FETCH_USERS_REQUEST'})
//         axios
//             .get(`${BASE_URL}.json`)
//             .then(response => {
//                 const users = response.data
//                 dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users })
//             })
//             .catch(error => {
//                 dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message })
//             })
//     }
// }

export const fetchUser = (userId) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_USER_REQUEST'})
        axios
            .get(`${BASE_URL}/${userId}.json`)
            .then(response => {
                const user = response.data
                dispatch({ type: 'FETCH_USERS_SUCCESS', payload: user })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message })
            })
    }
}


export const createUser = (user) => {
    return (dispatch) => {
        dispatch({type: 'CREATE_USER_REQUEST'})
        axios
            .post(`${BASE_URL}.json`, user)
            .then(response => {
                const newUser = { userId: response.data.name, user };
                dispatch({ type: 'CREATE_USER_SUCCESS', payload: newUser})
            })
            .catch(error => {
                dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message})
            })
    }
}

export const deleteUser = (userId) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_USER_REQUEST'})
        axios
            .delete(`${BASE_URL}/${userId}.json`)
            .then(() => {
                dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId})
            })
            .catch(error => {
                dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message})
            })
    }
}



export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_USERS_REQUEST'})
        axios
            .get(`${BASE_URL}.json`)
            .then(response => {
                const users = response.data
                dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message })
            })
    }
}


export const updateUser = (data) => {
    return (dispatch) => {
        dispatch({type: 'UPDATE_USER_REQUEST'})
        axios
            .patch(`${BASE_URL}.json`, data)
            .then(response => {
                const userId = Object.keys(response.data)[0];
                const newUserData = response.data[userId];
                const payload = {userId, newUserData}

                dispatch({ type: 'UPDATE_USER_SUCCESS', payload })
            })
            .catch(error => {
                dispatch({ type: 'UPDATE_USER_FAILURE', payload: error.message })
            })
    }
}