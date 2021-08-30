import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

    // this.props.toggleIsFetching(true);
    // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // })
  }

  onPageChanged = (pageNumber) => {

    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)

    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // UsersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   })
  }

  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      isFetching={this.props.isFetching}
      toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
      followingInProgress={this.props.followingInProgress}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (count) => {
//       dispatch(setTotalUsersCountAC(count))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
})(UsersContainer)
