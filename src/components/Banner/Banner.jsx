'use client'

import styles from './Banner.module.scss'

const Banner = () => {

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} data-aos="fade-up">Welcome to the next generation of <span>open finance</span></h1>
          <p className={styles.text} data-aos="fade-left">Empowering the Next Generation of Fintech Startups with Enriched Data</p>
        </div>
      </div>
      <div className={styles.video_content}>
        <video className={styles.video} width="1920"
          autoPlay
          muted
          loop
          playsInline
          preload='auto'>
          <source src="/trawler_video_final.webm" type="video/webm" />
          <source src="/trawler_video_final.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  )
}

export default Banner