'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const BannerText = dynamic(() => import('@/components/BannerText/BannerText'), { ssr: false });
const Calendly = dynamic(() => import('@/components/Calendly/Calendly'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 }); 
  }, []);

  const title = (
    <>
    Schedule Your<span> Demo</span>
    </>
  )
  return (

    <>
      <Header />
      <BannerText title={title}
        text="Connect with our integration experts to see how Trawler seamlessly aligns with your products and enhances your workflow."
      />
      <Calendly />
      <Footer />
    </>
  );
}
