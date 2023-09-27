import Card from '@components/card/Card';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='o-container'>
      <div className='o-col-sm-4 o-col-lg-6'>
        <Card />
      </div>

      <div className='o-col-sm-4 o-col-lg-6'>
        <Card />
      </div>

      <div className='o-col-sm-4 o-col-lg-6'>
        <Card />
      </div>
    </div>
  );
}
