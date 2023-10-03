import React, {useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
const Navbar = () => {
  const [open,isOpen] = useState(false);
  console.log(open)
  return (
    <nav className={styles.navbar}>
        <h1>Bilgekul Kadirhan Karahan</h1>
        <button onClick = {(e) => isOpen(true)} className={open ? styles.open : styles.close }>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggles" viewBox="0 0 16 16">
              <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
          </svg>
        </button>
        <div className={styles.link_group}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Works</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar