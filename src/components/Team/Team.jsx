'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

import styles from './Team.module.scss'

const Team = () => {

  const TeamContent = [
    {
      image: '/images/valentin-castillo.png', 
      name: 'Valentín Castillo',
      position: 'CTO & Co-Founder',
      linkedin: 'https://www.linkedin.com/in/valentinc94/'
    },
    {
      image: '/images/nelson-canro.png',
      name: 'Nelson Canro',
      position: 'CEO & Co-Founder',
      linkedin: 'https://www.linkedin.com/in/vladimirc/'
    },
  ]

  return (
    <div className={styles.team}>
      <div className={styles.container}>
        <div className={styles.list}>
            {TeamContent.map((item, index) => (
              <div className={styles.item} key={index} data-aos="fade-up">
                <img src={item.image} alt="" />
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.position}>{item.position}</p>
                <Link href={item.linkedin} target='_blank' className={styles.linkedin}><FaLinkedin /></Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Team
