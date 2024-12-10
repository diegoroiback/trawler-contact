import React from 'react'
import { LogosProjects } from '@/constants/Logos'
import Marquee from "react-fast-marquee";

import styles from './Logos.module.scss'

const Logos = ({ title }) => {
  return (
    <div className={styles.logos}>
      <div className={styles.container}>
        <h3 className={styles.title} data-aos="fade-up">{title}</h3>
        <div className={styles.content} data-aos="fade-left">
          <Marquee>
            {LogosProjects.map((item, index) => (
              <div key={index} className={styles.item}>
                <img src={item.image} alt="" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Logos