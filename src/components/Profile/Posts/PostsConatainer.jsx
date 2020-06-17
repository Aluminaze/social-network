import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'
import Posts from './Posts'
import Store from '../../../storeContext'

const PostsContainer = (props) => {
  return (
    <Store.Consumer>
      {
        (store) => {
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
      }
    </Store.Consumer>
  )
}

export default PostsContainer
