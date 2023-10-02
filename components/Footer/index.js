import Contact from '@/pages/contact'
import styles from '@/styles/Footer.module.css'
import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <div>
            <Contact/>
        </div>
        <div>
            <h3 className={styles.h3}>Bilgekul Kadirhan Karahan</h3>
            <div><i>1</i>-<i>2</i>...</div>
            <span>tradermarks....</span>
        </div>
    </React.Fragment>
  )
}

export default Footer