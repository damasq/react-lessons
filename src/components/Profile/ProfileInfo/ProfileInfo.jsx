import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <img src='https://johnchandlermedia.com/wp-content/uploads/2019/03/Los-Angeles-Wide-Angle-Panorama-1.jpg' />
      </div>
      <div className={styles.profileData}>
        <img className={styles.avatar} src={props.profile.photos.large} />
        <div className={styles.profileDesc}>
          <h2>{props.profile.fullName}</h2>

          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;