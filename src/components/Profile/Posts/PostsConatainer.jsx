import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'
import Posts from './Posts'

const PostsContainer = (props) => {
  let store = props.store
  let state = store.getState()  
  
  let onAddPost = (text) => {
    if (text) store.dispatch(addPostCreator())
  }

  let onPostChange = (text) => {
    store.dispatch(updateNewPostTextCreator(text))
  }

  return (
    <Posts      
      onAddPost={onAddPost}
      onPostChange={onPostChange}
      postsData={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  )
}

export default PostsContainer
