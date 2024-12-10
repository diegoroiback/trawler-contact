'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const BannerText = dynamic(() => import('@/components/BannerText/BannerText'), { ssr: false });
const Prices = dynamic(() => import('@/components/Prices/Prices'), { ssr: false });
const Logos = dynamic(() => import('@/components/Logos/Logos'), { ssr: false });
const Faqs = dynamic(() => import('@/components/Faqs/Faqs'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const title = (
    <>
      The Full Stack for <span>Modern Fintech</span>
    </>
  )
  return (

    <>
      <Header />
      <BannerText title={title}
        text="Stop wrestling with multiple integrations. Start building what matters."
      /> 
      <Prices />
      <Logos title='Backed by' />
      <Faqs />
      <Footer />
    </>
  );
}
