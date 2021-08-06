const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Jack', photo: 'https://i.pinimg.com/originals/06/6e/04/066e0429175c04fecaf2955bd3489f5d.jpg' },
    { id: 2, name: 'Kate', photo: 'http://static-cdn4.vigbo.tech/u27103/40428/blog/4191911/2964632/69479884/1000-katevox-c3306fa75e7ed5a5d6f408bf2dd95bf7.jpg' },
    { id: 3, name: 'Bob', photo: 'https://img.a.transfermarkt.technology/portrait/big/131789-1520605270.jpg?lm=1' },
    { id: 4, name: 'Alice', photo: 'https://angartwork.akamaized.net/webp/?id=1127471204&size=296' },
    { id: 5, name: 'Chloe', photo: 'https://www.film.ru/sites/default/files/people/_tmdb/zlE4TmUFj2Cq9SOkpqbAcl23cQT.jpg' },
    { id: 6, name: 'Alex', photo: 'https://img.a.transfermarkt.technology/portrait/header/4289-1454935736.jpg?lm=1' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Wassap' }
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.currentMessage;
      return state;

    default:
      return state;
  }

}

export const sendMessageActionCreater = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreater = (message) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, currentMessage: message })

export default messagesReducer;