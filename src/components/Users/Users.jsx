import styles from './Users.module.css'
import userPhoto from '../../assets/img/avatar.png'
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount > 10 ? 10 : props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <div>

        <div className={styles.pageNumbers}>
          {pages.map(p => {
            return <span
              key={p}
              className={`${styles.pageNumbersItem} ${props.currentPage === p && styles.selectedPage}`}
              onClick={(e) => { props.onPageChanged(p) }}
            >
              {p}
            </span>
          })}
        </div>

        {props.users.map(u => <div className={styles.container} key={u.id}>
          <div>
            <div>
              <NavLink to={`/profile/${u.id}`} >
                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.avatar} />
              </NavLink>
            </div>
            <div>
              <button onClick={() => { props.follow(u.id) }}>
                {u.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          </div>

          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        </div>)}

      </div>
    </>
  )
}

export default Users
