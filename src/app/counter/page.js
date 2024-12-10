'use client'

import dynamic from 'next/dynamic';
import 'aos/dist/aos.css';

const Counter = dynamic(() => import('@/components/Counter/Counter'), { ssr: false });

export default function Home() {
  return (

    <>
      <Counter />
    </>
  );
}
