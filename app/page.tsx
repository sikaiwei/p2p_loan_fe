"use client";
import Image from "next/image";
import styles from "./page.module.css";
import App from './App.jsx'

import Link from 'next/link'


import { Web3Provider } from './Web3Provider.jsx'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
  

        <li>Let us start to vote ......</li>
        <Web3Provider>
          <App />
        </Web3Provider>

        <Link href="/about" className="">
          Vote
        </Link>

      </main>
      
    </div>
  );
}
