import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Bouton5 } from '@/components/tp5c'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Bouton5/>
    </>
  ) 
}