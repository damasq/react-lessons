import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreater, updateNewMessageTextCreater } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (message) => {
      dispatch(updateNewMessageTextCreater(message));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreater());
    }
  }
}

let DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;