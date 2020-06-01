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
        <Post profile="I'm" message="I'm create this application with React technology!"/>
        <Post profile="I'm" message="It's my second post on my page :)"/>
        <Post profile="I'm" message="It's my first post on my page. WoW!!!"/>
      </div>
  )
}

export default Posts;