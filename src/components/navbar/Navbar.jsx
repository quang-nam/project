"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToogle from '../DarkModeToggle/DarkModeToogle'
import { signOut, useSession } from 'next-auth/react'
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "MyBlog",
      url: "/myblog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  const session = useSession()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Nam Nguyen</Link>
      <div className={styles.links}>
        <DarkModeToogle/>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        {session.status==="authenticated" &&
           <button 
           className={styles.logout}
           onClick={signOut}
         >Log out</button>
        }
      </div>
    </div>
  )
}

export default Navbar