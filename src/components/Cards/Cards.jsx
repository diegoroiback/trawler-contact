'use client'

import styles from './Cards.module.scss'

const Cards = () => {

  const CardsContent = [
    {
      title: 'Our Mission',
      text: (
        <>
          We believe that by simplifying the complex landscape of open banking, we can unlock a new era of financial innovation.
          <br /><br />
          Our platform is designed to remove technical barriers, allowing companies to focus on what truly matters: building exceptional products that expand access to financial services for everyone.
        </>
      )
    },
    {
      title: 'Our Expertise',
      text: (
        <>
          With deep knowledge of the fintech ecosystem and a passion for elegant solutions, we&apos;ve created a hub that connects you to top data aggregators and enrichment providers.
          <br /><br />
          Our team of fintech and B2B SaaS veterans understands the challenges you face and has crafted a platform that turns those challenges into opportunities.
        </>
      )
    }
  ]

  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <div className={styles.list}>
            {CardsContent.map((item, index) => (
              <div className={styles.item} key={index} data-aos="flip-right">
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
