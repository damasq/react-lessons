const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  avatar: null
  // isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const setAuthUserAvatar = (avatar) => ({ type: SET_USER_DATA, avatar })

export default authReducer;
