import { NavLink } from 'react-router-dom';
import styles from './DialogsItem.module.css';

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={styles.users} >
      <div className={styles.userPhoto}>
        <img className={styles.photo} src={props.photo} alt="" />
      </div>
      <NavLink className={styles.user} activeClassName={styles.activeUser} to={path}>
        {props.name}
      </NavLink>
    </div >
  );
}

export default DialogsItem;