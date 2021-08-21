import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;