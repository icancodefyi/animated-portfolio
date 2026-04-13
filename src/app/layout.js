import './globals.css'
import { Syne, Manrope } from 'next/font/google'
import Header from '../components/Header';

const syne = Syne({ subsets: ['latin'], variable: '--font-display' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'Zaid Rakhange | GenAI Engineer & Tech Entrepreneur',
  description: 'Portfolio of Zaid Rakhange - GenAI Engineer, founder, and product-focused web developer based in Mumbai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
