import React, { useEffect, useState } from 'react'
import { postcategories } from '../../utils/commonData'
import styles from './Topbar.module.css'

const Topbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(postcategories)
  }, [])
  const showDropdown = () => {
    setIsClicked(!isClicked)
  }
  return (
    <header className={styles.topbar}>
      <a className={styles.logoWrapper} href='/stories'>
        <div>
          <div className={styles.logo}>Edyoda</div>
          <p className={styles.logoText}>Stories</p>
        </div>
      </a>
      <nav className={styles.navLinksWrapper}>
        <div className={styles.exploreCategoriesWrapper}>
          <button className={styles.exploreCategories} onClick={showDropdown}>
            Explore Categories <i className='fas fa-angle-down'></i>
          </button>
          {isClicked && (
            <div className={styles.dropdown}>
              {categories.length &&
                categories.map(({ id, title }) => (
                  <a key={id} href='/'>
                    {title}
                  </a>
                ))}
              <i></i>
            </div>
          )}
        </div>
        <div className={styles.rightEndMenus}>
          <p className={styles.edyodaText}>
            EdYoda is free learning and knowledge <br /> sharing platform for
            techies
          </p>
          <button className={styles.goToButton}>Go To Main Website</button>
        </div>
      </nav>
    </header>
  )
}

export default Topbar
