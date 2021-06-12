import React from 'react'
import BlogPosts from '../BlogPosts'
import Filters from '../Filters'
import styles from './PostsContainer.module.css'

const PostsContainer = () => {
  return (
    <div className={styles.postsContainer}>
      <h3 className={styles.postHeading}>Latest Posts</h3>
      <Filters />
      <BlogPosts />
    </div>
  )
}

export default PostsContainer