import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import styles from '@/styles/Header.module.css'
const Header = () => {
  const[scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };
    window.addEventListener('scroll',handleScroll);
    return() => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const handleScroll = () => {
    window.scrollTo({
      top: 1000, 
      behavior: 'smooth', 
    });
  }
  return (
    <React.Fragment>
       <div className={styles.general}>
            <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
              <Navbar/>
            </div>
            <h1 className={styles.h1}>Hi I&apos;m Bilgekul.</h1>
            <div className={styles.headline}>
              <span className={styles.static_word}>A Junior </span>
              <span>
                  <b className={styles.visible}>Web Developer.</b>
              </span>
           </div> 
           <div className={styles.scroll_btn} onClick={handleScroll}>
              <div className={styles.line}></div>
           </div>
        </div> 
    </React.Fragment>
  )
}
export default Header