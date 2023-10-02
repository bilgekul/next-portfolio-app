import React from 'react'
import styles from '@/styles/Contact.module.css'
const Contact = () => {
  return (
    <React.Fragment>
        <div className={styles.content}>
            <h1 className={styles.h1}>Get in touch</h1>
            <form action="">
                <div className= {styles.input_area}>
                     <input type="text" placeholder='Name' />
                     <input type="email" placeholder='Email'/>
                </div>
                <div className={styles.text_area}>
                   <textarea placeholder='How can I help you?'/> 
                </div>
            </form>
            <button className= {styles.btn}>Submit</button>
        </div>
    </React.Fragment>
  )
}

export default Contact