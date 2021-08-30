import { connect } from 'react-redux';
import { compose } from 'redux';
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

// export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);