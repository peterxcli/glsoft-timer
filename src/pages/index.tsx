/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Timer from '@/components/timer/Timer'
import styles from './index.module.scss'
import Trigger from '@/components/trigger/Trigger'
import Reset from '@/components/reset/Reset'
import Clock from '@/components/clock/Clock'
import TimerAudio from '@/components/audio/Audio'
import Setting from '@/components/setting/Setting'

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
        <Clock/>
        <Reset/>
        <Trigger/>
        <Setting/>
        <TimerAudio/>
      {/* </main> */}
    </div>
  )
}
