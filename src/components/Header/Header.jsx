import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' />

      <div className={styles.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;