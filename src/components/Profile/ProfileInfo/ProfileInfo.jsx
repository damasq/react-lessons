import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src='https://johnchandlermedia.com/wp-content/uploads/2019/03/Los-Angeles-Wide-Angle-Panorama-1.jpg' />
      </div>
      <div className={styles.profileDesc}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;