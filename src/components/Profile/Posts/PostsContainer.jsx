import React from 'react'
import Posts from './Posts'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts
  }
}

const PostsContainer = connect(mapStateToProps, {addPost} )(Posts)

export default PostsContainer
