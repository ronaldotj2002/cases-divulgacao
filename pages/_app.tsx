// These styles apply to every route in the application
import '../globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}