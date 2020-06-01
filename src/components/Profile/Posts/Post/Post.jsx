import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.posts__history}>
      <div className={style.posts__history__photo}>
        {`${props.profile}`}
      </div>
      <div className={style.posts__history__msg}>
        {`${props.message}`}
      </div>
    </div>
  )
}

export default Post;