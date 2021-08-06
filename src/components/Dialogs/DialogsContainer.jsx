// import { NavLink } from 'react-router-dom';
import React from 'react';
import { sendMessageActionCreater, updateNewMessageTextCreater } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreater());
  }

  let updateNewMessageText = (message) => {
    let action = updateNewMessageTextCreater(message)
    props.store.dispatch(action);
  }

  return (
    <Dialogs
      messages={state.messagesPage.messages}
      dialogs={state.messagesPage.dialogs}
      newMessageText={state.messagesPage.newMessageText}
      updateNewMessageText={updateNewMessageText}
      sendMessage={sendMessage}
    />
  )
}

export default DialogsContainer;