import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1>Logo</h1>
        <div className={styles.btnsBox}>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
        </div>
    </div>
  )
}

export default Header