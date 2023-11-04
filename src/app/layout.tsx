"use client"

import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@/Store/Provider'
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css';

const poppin = Poppins({
  weight: ['100', '400'],
  subsets: ['latin'],
})


// export const metadata = {
//   title: 'Ecommerce Next App',
//   description: 'Developed by Abdullah Moiz',
//   authors: [{ name: "Abdullah Moiz", url: 'https://abdullahmoiz.vercel.app/' }],
// }

function initMap(): void {}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}&callback=initMap`}>
        </Script>
      </head>
      <body className={poppin.className}>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}
