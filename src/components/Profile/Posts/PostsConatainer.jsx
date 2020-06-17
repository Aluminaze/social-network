import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'
import Posts from './Posts'


const PostsContainer = (props) => {
  let state = props.store.getState()  
  
  let onAddPost = (text) => {
    if (text) props.store.dispatch(addPostCreator())
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text))
  }

  return (
    <Posts      
      onAddPost={onAddPost}
      onPostChange={onPostChange}
      postsData={state.profilePage}
    />
  )
}

export default PostsContainer
