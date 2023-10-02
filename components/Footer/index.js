import Contact from '@/pages/contact'
import styles from '@/styles/Footer.module.css'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <React.Fragment>
        <div>
            <Contact/>
        </div>
        <div>
            <h3 className={styles.h3}>Bilgekul Kadirhan Karahan</h3>
            <div>
               <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <span>tradermarks....</span>
        </div>
    </React.Fragment>
  )
}

export default Footer