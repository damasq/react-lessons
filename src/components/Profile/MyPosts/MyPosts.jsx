import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.post} likes={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.postsWrapper}>
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>New post</div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;