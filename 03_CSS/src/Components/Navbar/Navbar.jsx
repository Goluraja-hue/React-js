import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <a href="">Home</a>
        <a href="">Skills</a>
        <a href="">Timeline</a>
        <a href="">Contact</a>
    </div>
  )
}

export default Navbar