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
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path d="M3,3v18h18V3H3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2	C9.1,8.2,8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3c-0.2,0-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1	c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z"></path>
                 </svg>
            </div>
            <span>tradermarks....</span>
        </div>
    </React.Fragment>
  )
}

export default Footer