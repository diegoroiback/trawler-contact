'use client'

import styles from './BannerText.module.scss'

const BannerText = ({ title, text }) => {

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} data-aos="fade-up">{title}</h1>
          <p className={styles.text} data-aos="fade-up">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default BannerText