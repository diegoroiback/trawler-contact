'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Provider.module.scss'

const ProviderContent = [
  {
    bg: '/images/card-1.svg',
    img: '/images/icon-integration.svg',
    title: 'One Seamless Integration',
    text: 'Forget about managing multiple APIs. Connect once to Trawler and unlock a world of financial data and services.',
  },
  {
    img: '/images/icon-data.svg',
    title: 'Best in Class Data Providers',
    text: 'Access a curated selection of top-tier financial data sources through a single, unified interface.',
  },
  {
    img: '/images/icon-contract.svg',
    title: 'One Simple Contract',
    text: 'Streamline your operations with a single agreement covering all your data and enrichment needs.',
    btn: 'Book a demo',
    url: '/book-a-demo'
  },
]

const Provider = () => {
  return (
    <div className={styles.provider}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Why choose Trawler as <span>your open finance</span> software provider?</h2>
        <div className={styles.content} data-aos="zoom-in-up">
          {ProviderContent.map((item, index) => (
            <div key={index} className={styles.item} style={item.bg && ({ backgroundImage: `url(${item.bg})` })}>
              <div className={styles.image}>
                <img src={item.img} alt="" className={styles.img} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.info_title}>{item.title}</h4>
                <p className={styles.info_text}>{item.text}</p>
                {item.btn && (
                  <Link href={item.url} className={styles.btn}>{item.btn}</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Provider