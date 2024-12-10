'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const BannerText = dynamic(() => import('@/components/BannerText/BannerText'), { ssr: false });
const Cards = dynamic(() => import('@/components/Cards/Cards'), { ssr: false });
const Team = dynamic(() => import('@/components/Team/Team'), { ssr: false });
const Logos = dynamic(() => import('@/components/Logos/Logos'), { ssr: false });
const Stack = dynamic(() => import('@/components/Stack/Stack'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const title = (
    <>
    <span>Simplifying Open Banking</span> for Innovative Fintech Experiences
    </>
  )
  return (

    <>
      <Header />
      <BannerText title={title}
        text="At Trawler, we're building the future of fintech infrastructure. We empower builders to create groundbreaking financial products by streamlining access to best-in-class data providers through a single, powerful integration."
      />
      <Cards />
      <Team />
      <Logos title='Backed by' />
      <Stack animations={false} />
      <Footer />
    </>
  );
}
