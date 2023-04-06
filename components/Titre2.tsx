import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Modal } from '@/components/Modal'
const couleur="text-blue-500"

type couleurProps = {
    couleur: string;
   };
   

export const Titre = ({
    couleur
}: couleurProps) => {
    return (
        <h1 className={couleur}>Mon h1</h1>
    );
   };
   