import React from 'react';
import style from './Post.module.css'

const Post = () => {
  return (
    <div className={style.posts__history}>
      <div className={style.posts__history__photo}>I'm</div>
      <div className={style.posts__history__msg}>Hey, Today I'm create my first React application!</div>
    </div>
  )
}

export default Post;