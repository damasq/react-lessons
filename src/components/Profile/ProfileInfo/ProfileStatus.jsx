import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'set status'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;