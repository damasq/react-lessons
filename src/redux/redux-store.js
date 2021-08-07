import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;