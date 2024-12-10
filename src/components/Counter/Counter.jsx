'use client'

import Countdown from "react-countdown";
import { FaLinkedin } from "react-icons/fa";
import '@aarsteinmedia/dotlottie-player';
import Link from "next/link";
import styles from './Counter.module.scss'

const Counter = () => {

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Countdown
          date={new Date("2025-01-31T23:59:59")}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className={styles.content}>
              <h2 className={styles.subtitle}>Something great is on the way</h2>
              <h1 className={styles.title}>Coming soon</h1>
              <div className={styles.counter}>
                <div className={styles.counter_item}>
                  <p className={styles.counter_value}>{days}</p>
                  <p className={styles.counter_date}>Days</p>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.counter_item}>
                  <p className={styles.counter_value}>{hours}</p>
                  <p className={styles.counter_date}>Hours</p>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.counter_item}>
                  <p className={styles.counter_value}>{minutes}</p>
                  <p className={styles.counter_date}>Minutes</p>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.counter_item}>
                  <p className={styles.counter_value}>{seconds}</p>
                  <p className={styles.counter_date}>Seconds</p>
                </div>
              </div>
              <div className={styles.social}>
                <p className={styles.social_text}>Follow us:</p>
                <div className={styles.social_list}>
                  <div className={styles.docial_item}>
                    <Link href={'https://www.linkedin.com/company/trawler-inc/'} target='_blank' className={styles.social_link}><FaLinkedin /></Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
      <dotlottie-player
        src="/waves.lottie"
        autoplay
        loop
        speed='2'
        style={{
          width: '100%',
          height: 'auto',
          position: 'absolute',
          bottom: '0',
          left: 0
        }}
      ></dotlottie-player>
    </div>
  )
}

export default Counter