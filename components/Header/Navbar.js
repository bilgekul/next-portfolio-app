import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
        <h1>Bilgekul Kadirhan Karahan</h1>
        <div>
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