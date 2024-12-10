'use client'

import styles from './Policy.module.scss'

const Policy = ({ title, text }) => {

  return (
    <div className={styles.policy}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Policy
