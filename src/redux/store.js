import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  // _state: {
  //   profilePage: {
  //     posts: [
  //       { id: 1, post: 'Hi, how are you?', likesCount: 20 },
  //       { id: 2, post: 'It\'s my second post', likesCount: 13 },
  //       { id: 3, post: 'I\'m here again', likesCount: 2 },
  //       { id: 4, post: 'It\'s my fourth post', likesCount: 42 },
  //     ],
  //     newPostText: 'something'
  //   },
  //   messagesPage: {
  //     dialogs: [
  //       { id: 1, name: 'Jack', photo: 'https://i.pinimg.com/originals/06/6e/04/066e0429175c04fecaf2955bd3489f5d.jpg' },
  //       { id: 2, name: 'Kate', photo: 'http://static-cdn4.vigbo.tech/u27103/40428/blog/4191911/2964632/69479884/1000-katevox-c3306fa75e7ed5a5d6f408bf2dd95bf7.jpg' },
  //       { id: 3, name: 'Bob', photo: 'https://img.a.transfermarkt.technology/portrait/big/131789-1520605270.jpg?lm=1' },
  //       { id: 4, name: 'Alice', photo: 'https://angartwork.akamaized.net/webp/?id=1127471204&size=296' },
  //       { id: 5, name: 'Chloe', photo: 'https://www.film.ru/sites/default/files/people/_tmdb/zlE4TmUFj2Cq9SOkpqbAcl23cQT.jpg' },
  //       { id: 6, name: 'Alex', photo: 'https://img.a.transfermarkt.technology/portrait/header/4289-1454935736.jpg?lm=1' }
  //     ],
  //     messages: [
  //       { id: 1, message: 'Hi' },
  //       { id: 2, message: 'Hello' },
  //       { id: 3, message: 'Wassap' }
  //     ],
  //     newMessageText: ''
  //   }
  // },

  _callSubscriber() { },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }
}

export default store;