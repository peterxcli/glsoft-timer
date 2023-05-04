/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import {themes} from '../themes'
import Timer from '@/components/timer/Timer'
import styles from './index.module.scss'
import Trigger from '@/components/trigger/Trigger'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [theme, setTheme] = useState(themes[0].value);
  return (
    <div className={styles.index}>
      <Head>
        <title>Timer</title>
        <meta name="description" content="Timer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glsoft-timer/favicon.ico" />
        {/* <link href={`/glsoft-timer/style/${theme}.css`} rel="stylesheet" lang='scss' /> */}
      </Head>
      {/* <main> */}
        <Timer />
        {/* <Trigger/> */}
      {/* </main> */}
    </div>
  )
}
