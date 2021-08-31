import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    !userId ? userId = 19029 : userId = userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

// export default connect(mapStateToProps, { getUserProfile })(withRouter(withAuthRedirect(ProfileContainer)));

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)