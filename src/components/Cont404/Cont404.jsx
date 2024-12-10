import Link from 'next/link';
import styles from './Cont404.module.scss'

const Cont404 = () => {

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/images/404-image.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>The page you are looking for could not be found.</p>
          <Link href="/" className={styles.btn}>Go back to Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Cont404