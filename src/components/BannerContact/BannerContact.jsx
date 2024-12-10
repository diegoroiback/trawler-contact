'use client'

import styles from './BannerContact.module.scss'

const BannerContact = () => {

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <h1 className={styles.title}>Join to the next <span>fintech generation</span></h1>
          <p className={styles.text}>Access best-in-class data providers through one seamless integration</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/images/banner-contat-bg.png" alt="" />
      </div>
    </div>
  )
}

export default BannerContact