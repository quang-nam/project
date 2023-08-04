"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Register = () => {
  const [err, setErr]= useState(false)
  const router = useRouter()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const name= e.target[0].value
    const email= e.target[1].value
    const password= e.target[2].value
    try {
      const res= await fetch("/api/auth/register",{
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
        mode:'cors'
      })
      console.log(res)
      res.status===201 && router.push("/dashboard/login?success=Account has been created")
    } catch (error) {
      setErr(true)
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign ip to see the dashboard</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
         type="text"
         placeholder='Username'
         required
         className={styles.input}
         />
          <input
         type="email"
         placeholder='Email'
         required
         className={styles.input}
         />
          <input
         type="password"
         placeholder='Password'
         required
         className={styles.input}
         />
          <button className={styles.button}>Register</button>
          {err && "Something went wrong"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login?success=Account has been successfully created">
        Login with an existing account
      </Link>
    </div>
  )
}

export default Register