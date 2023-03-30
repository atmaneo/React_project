import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Pokemon } from '@/components/pokemon'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Pokemon id={1}/>
        <Pokemon id={25}/>
    </>
  ) 
}
