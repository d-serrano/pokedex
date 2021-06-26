import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from '../components/content';
// redux
import { Provider } from 'react-redux'
import store from '../redux/store';
export default function Home() {
  return (
    <Provider store = { store }>
   
      <Content/>
      
   
    </Provider>
  )
}
