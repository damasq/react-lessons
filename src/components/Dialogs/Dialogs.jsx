// import { NavLink } from 'react-router-dom';
import React from 'react';
import { sendMessageActionCreater, updateNewMessageTextCreater } from '../../redux/messages-reducer';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  // debugger;

  let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} photo={d.photo} />)
  let messagesElements = props.messages.map(m => <Message text={m.message} />)

  // let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let message = e.target.value;
    props.updateNewMessageText(message);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onMessageChange}
            placeholder='Type your message'
            // ref={newMessageElement}
            value={props.newMessageText} />
        </div>
        <div>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;