'use client'

import Link from 'next/link'
import { useState } from 'react';
import styles from './Prices.module.scss'
import {PricesList} from '@/constants/Prices'
import { IoIosCheckmark } from "react-icons/io";

const Prices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.prices}>
      <div className={styles.container}>
        <div className={styles.list}>
            {PricesList.map((item, index) => (
              <div key={index}
                className={`${styles.item} ${activeIndex === index ? styles.item_active : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}>
                <div className={styles.info}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                  <p className={styles.text}>{item.text}</p>
                  <Link href={item.btnLink} className={styles.btn}>{item.btn}</Link>
                </div>
                <div className={styles.info}>
                  <h4 className={styles.info_title}>Features</h4>
                  <ul className={styles.info_list}>
                    {item.features.map((e, index) => (
                      <li className={styles.info_item} key={index}>
                        <IoIosCheckmark /> <p className={styles.info_text}>{ e }</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.info_price}>
                  <h4 className={styles.info_title}>Services</h4>
                  <ul className={styles.info_list}>
                    {item.features.map((e, index) => (
                      <li className={styles.info_item} key={index}>
                        <IoIosCheckmark /><p className={styles.info_text}>{ e }</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Prices
