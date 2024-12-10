import '@/styles/reset.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-familjen-grotesk',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const layoutStyles = {
  fontFamily: 'var(--font-familjen-grotesk)',
};

export const metadata = {
  title: "Trawler",
  description: "Empowering the Next Generation of Fintech Startups with Enriched Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.variable} style={layoutStyles}>
        {children}
      </body>
    </html>
  );
}