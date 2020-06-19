import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'
import Posts from './Posts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (text) => { if (text) dispatch(addPostCreator()) },
    onPostChange: (text) => { dispatch(updateNewPostTextCreator(text)) }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
