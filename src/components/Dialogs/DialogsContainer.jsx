// import { NavLink } from 'react-router-dom';
import React from 'react';
import { sendMessageActionCreater, updateNewMessageTextCreater } from '../../redux/messages-reducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let sendMessage = () => {
            store.dispatch(sendMessageActionCreater());
          }

          let updateNewMessageText = (message) => {
            let action = updateNewMessageTextCreater(message)
            store.dispatch(action);
          }

          return <Dialogs
            messages={state.messagesPage.messages}
            dialogs={state.messagesPage.dialogs}
            newMessageText={state.messagesPage.newMessageText}
            updateNewMessageText={updateNewMessageText}
            sendMessage={sendMessage}
          />
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;