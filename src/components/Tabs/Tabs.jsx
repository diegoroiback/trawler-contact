'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Tabs.module.scss';
import { TabsList } from '@/constants/Tabs';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1020) return

      const offsets = contentRefs.current.map(
        (ref) => ref.getBoundingClientRect().top
      );

      const activeIndex = offsets.findIndex(
        (offset) => offset >= 0 && offset < window.innerHeight / 3
      );
      if (activeIndex !== -1 && activeIndex !== activeTab) {
        setActiveTab(activeIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  const scrollToSection = (index) => {
    const target = contentRefs.current[index];
    if (target) {
      const offset = 100;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.section} id='solutions'>
      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.tabs} data-aos="fade-right">
          {TabsList.map((item, index) => (
            <div className={styles.tabs_item} key={index}>
              <button
                className={`${styles.tabs_btn} ${
                  activeTab === index ? styles.active : ''
                }`}
                onClick={() => scrollToSection(index)}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>
          {TabsList.map((item, index) => (
            <div
              className={styles.item}
              key={index}
              id={`item${index}`}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={styles.item_img}
              />
              <div className={styles.item_content}>
                <h4 className={styles.item_title}>{item.title}</h4>
                <p className={styles.item_text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
