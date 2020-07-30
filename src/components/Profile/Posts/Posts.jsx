import React from 'react'
import style from './Posts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

const Posts = (props) => {
  let postsItems = props.postsData.map(post => <Post profile="I'm" message={post.message} key={post.id} likes={post.likes} />)

  const onSubmit = (values) => {
    if(values.postInput) props.addPost(values.postInput)
  }

  return (
    <div className={style.profile__posts}>
      <div className={style.posts__header}>My posts</div>
      <PostForm onSubmit={onSubmit}/>
      {postsItems}
    </div>
  )
}

export default Posts
