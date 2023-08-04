import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
// async function getData(){
//   const res= await fetch("http://localhost:3000/api/posts",{
//    // cache: "force-cache"// cache the result from the server 
//    //next: {revalidate:10}// data change but not too often 
//     cache:"no-store",
//   })
//   if(error){
//    // throw new Error("Fail to fetch data")
//     console.log(error)
//   }
//   return res.json()
// }
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts",{
      cache:"no-store"
    });
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
   // throw new Error("Failed to fetch data");
  }
}

const Page =  async() => {
  const data=  await getData()
  return (
    <div className={styles.mainContainer}>
      {  data.map(item =>(
      <Link href={`/myblog/${item._id}`} className={styles.container} key={item._id}>
        <div className={styles.imgContainer}>
          <Image 
            src={item.img}
            alt='image container'
            width={400}
            height={350}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Page