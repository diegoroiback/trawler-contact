'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const BannerContact = dynamic(() => import('@/components/BannerContact/BannerContact'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <>
      <Header />
      <BannerContact />
      <Contact />
      <Footer />
    </>
  );
}
