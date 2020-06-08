import React from 'react'
import style from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
  let newPostElement = React.createRef()

  let pushPost = () => {
    let text = newPostElement.current.value
    if(text)  props.dispatch({type: 'ADD-POST'})
  }

  let onChange = () => {
    let text = newPostElement.current.value
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }

  let postsItems = props.postsData.map(post => <Post profile="I'm" message={post.message} likes={post.likes} />)
  
  return (
    <div className={style.profile__posts}>
      <div className={style.posts__header}>My posts</div>
      <div className={style.posts__form}>
        <textarea onChange = {onChange} ref={newPostElement} className={style.posts__form__input} value={props.newPostText}/>
        <button onClick = { pushPost } className={style.posts__form__submit}>Add post</button>
      </div>
        {postsItems}
    </div>
  )
}

export default Posts;