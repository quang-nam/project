"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const session = useSession();
  const router= useRouter()
  if(session.status ==="loading"){
    return <p>Loading...</p>
  }
  if(session.status ==="authenticated"){
    return router.push("/dashboard")
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const email= e.target[0].value
    const password= e.target[1].value
    // name credentials
   // console.log(email, password)
    signIn("credentials",{
      email,
      password
    })
  }
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          <button className={styles.button}>Login</button>
       
      </form>
      <button className={styles.button} onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login