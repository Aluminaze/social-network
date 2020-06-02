import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

let postsData = [
  {id: 0, message: "I'm create this application with React technology!", likes: 23},
  {id: 0, message: "It's my second post on my page :)", likes: 12},
  {id: 0, message: "It's my first post on my page. WoW!!!", likes: 5},
]

const Posts = () => {
  return (
    <div className={style.profile__posts}>
        <div className={style.posts__header}>My posts</div>
        <form className={style.posts__form}>
          <textarea className={style.posts__form__input} type="text" placeholder="What is new?"></textarea>
          <input className={style.posts__form__submit} type="submit" value="Add post"></input>
        </form>
        <Post profile="I'm" message={postsData[0].message} likes={postsData[0].likes} />
        <Post profile="I'm" message={postsData[1].message} likes={postsData[1].likes} />
        <Post profile="I'm" message={postsData[2].message} likes={postsData[2].likes} />
      </div>
  )
}

export default Posts;