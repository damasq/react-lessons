const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, post: 'Hi, how are you?', likesCount: 20 },
    { id: 2, post: 'It\'s my second post', likesCount: 13 },
    { id: 3, post: 'I\'m here again', likesCount: 2 },
    { id: 4, post: 'It\'s my fourth post', likesCount: 42 },
  ],
  newPostText: 'something',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = '';
      // return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;
