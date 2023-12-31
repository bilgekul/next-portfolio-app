import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React from 'react'
import About from './about'
import Work from './works'
import Service from './services'
import Blog from './blogs'
export default function Home() {
  return (
    <React.Fragment>
        <Head>
        <title>Bilgekul Kadirhan Official</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About/>
      </div>
      <div>
        <Service/>
      </div>
      <div>
        <Work/>
      </div>
      <div>
        <Blog/>
      </div>
    </React.Fragment>
  )
}
