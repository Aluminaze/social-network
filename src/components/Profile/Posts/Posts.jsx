import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={style.profile__posts}>
        <div className={style.posts__header}>My posts</div>
        <form className={style.posts__form}>
          <textarea className={style.posts__form__input} type="text" placeholder="What is new?"></textarea>
          <input className={style.posts__form__submit} type="submit" value="Add post"></input>
        </form>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
  )
}

export default Posts;