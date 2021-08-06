import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}
      // posts={props.profileState.posts}
      // newPostText={props.profileState.newPostText}
      // dispatch={props.dispatch} 

      />
    </div>
  );
}

export default Profile;