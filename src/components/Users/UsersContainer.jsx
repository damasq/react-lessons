import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // if (this.props.users.length === 0) {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
    // }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      isFetching={this.props.isFetching}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
