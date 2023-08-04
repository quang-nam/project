import Image from "next/image";
import styles from './page.module.css'
import Hero from 'public/hero.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digical products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <Image src={Hero} alt="home page" className={styles.img}/>
    </div>
  )
}
