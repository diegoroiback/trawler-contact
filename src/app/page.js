'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Logos from '@/components/Logos/Logos'
import Stack from '@/components/Stack/Stack'
import Tabs from '@/components/Tabs/Tabs'
import Provider from '@/components/Provider/Provider'
import Faqs from '@/components/Faqs/Faqs'
import Footer from '@/components/Footer/Footer'

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
  <>
    <Header />
    <Banner />
    <Logos title='Trusted by the leading financial innovators' />
    <Stack animations={true} />
    <Tabs />
    <Provider />
    <Faqs />
    <Footer />
  </>
  );
}
