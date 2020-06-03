import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';



const Posts = (props) => {
  let postsItems = props.postsData.map(post => <Post profile="I'm" message={post.message} likes={post.likes} />)
  
  return (
    <div className={style.profile__posts}>
      <div className={style.posts__header}>My posts</div>
      <form className={style.posts__form}>
        <textarea className={style.posts__form__input} type="text" placeholder="What is new?"></textarea>
        <input className={style.posts__form__submit} type="submit" value="Add post"></input>
      </form>
        {postsItems}
    </div>
  )
}

export default Posts;