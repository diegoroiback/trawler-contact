
'use client'

import Link from 'next/link';
import styles from './Contact.module.scss'
import Form from './Form'

const ProviderContent = [
  {
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
    text: 'Streamline your operations with a single agreement covering all your data and enrichment needs.'
  },
]

const Contact = () => {

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-right">
          <Form />
        </div>
        <div className={styles.aside} data-aos="fade-left">
          {ProviderContent.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.image}>
                  <img src={item.img} alt="" className={styles.img} />
                </div>
                <h4 className={styles.info_title}>{item.title}</h4>
                <p className={styles.info_text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact