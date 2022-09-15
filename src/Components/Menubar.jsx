import React from 'react'
import styles from './Styles/menubar.module.css'

const Menubar = () => {
  return (
    <div className={styles.menuBarDiv} >
        <div className={styles.menuButtons}>
          <div className={styles.menuSalebtn}> <p>Sale</p></div>
          <div className={styles.menuEachbtn}> <p>New In</p></div>
          <div className={styles.menuEachbtn}> <p>Clothing</p></div>
          <div className={styles.menuEachbtn}> <p>Shoes</p></div>
          <div className={styles.menuEachbtn}> <p>Sportswear</p></div>
          <div className={styles.menuEachbtn}> <p>Accessories</p></div>
          <div className={styles.menuEachbtn}> <p>Summer</p></div>
          <div className={styles.menuEachbtn}> <p>Trending now</p></div>
          <div className={styles.menuEachbtn}> <p>Topman</p></div>
          <div className={styles.menuEachbtn}> <p>Face + Body</p></div>
          <div className={styles.menuEachbtn}> <p>Brands</p></div>
          <div className={styles.menuSalebtn}> <p>Outlet</p></div>
          <div className={styles.menuEachbtn}> <p>Marketplace</p></div>
        </div>
    </div>
  )
}

export default Menubar