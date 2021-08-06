import styles from './Post.module.css';

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img src="http://archilab.online/images/1/123.jpg" alt="" />
      {props.message}
      <div>
        <span>Like it! {props.likes}</span>
      </div>
    </div>
  );
}

export default Post;