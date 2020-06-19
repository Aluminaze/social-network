import React from 'react'
import style from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
  let newPostElement = React.createRef()

  let onAddPost = () => {
    let text = newPostElement.current.value
    if (text) props.onAddPost(text)
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.onPostChange(text)
  }

  let postsItems = props.postsData.map(post => <Post profile="I'm" message={post.message} key={post.id} likes={post.likes} />)

  return (
    <div className={style.profile__posts}>
      <div className={style.posts__header}>My posts</div>
      <div className={style.posts__form}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={style.posts__form__input}
          value={props.newPostText}
        />
        <button
          onClick={onAddPost}
          className={style.posts__form__submit}
        >Add post</button>
      </div>
      {postsItems}
    </div>
  )
}

export default Posts
