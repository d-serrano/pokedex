import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from '../components/content';

export default function Home() {
  return (
    <div className={styles.container}>
      <Content/>
      
    </div>
  )
}
