import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: !u.followed
            }
          }
          return u;
        })
      }
    // case UNFOLLOW:

    case SET_USERS:
      return {
        ...state,
        users: [
          // ...state.users,
          ...action.users
        ]
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
      }

    default:
      return state;
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
// export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {

    dispatch(toggleIsFetching(true));

    UsersAPI.getUsers(currentPage, pageSize).then(data => {
      // debugger;
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {

    dispatch(toggleIsFollowingProgress(true));
    UsersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {

    dispatch(toggleIsFollowingProgress(true));
    UsersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false))
      })
  }
}

export default usersReducer;
