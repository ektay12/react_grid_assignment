import React, { useState, useEffect } from 'react'
import { blogsData } from '../../utils/commonData'
import styles from './BlogPosts.module.css'

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    setBlogPosts(blogsData)
  }, [])

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return (
    <div className={styles.blogPostsWrapper}>
      {blogPosts.length &&
        blogPosts.map(
          ({ id, title, small_image, authorname, posted_on, description }) => (
            <div key={id} className={styles.blogPostItem}>
              <img src={small_image} alt={title} />
              <div className={styles.blogItemDetails}>
                <h3 className={styles.blogTitle}>{title}</h3>
                <p className={styles.authorName}>
                  {authorname}
                  <span className={styles.publishDate}>
                    {' '}
                    | {new Date(posted_on).toLocaleDateString('en-IN', options)}
                  </span>
                </p>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          ),
        )}
    </div>
  )
}

export default BlogPosts
