import Box from '@components/box/Box';
import Card from '@components/card/CustomCard';
import Head from 'next/head';
import Image from 'next/image';
import Header from 'src/layout/header/Header';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unicons.iconscout.com/release/v4.0.8/css/line.css'
        ></link>
      </Head>

      <div className='o-container'>
        <Header title='Hi, Ishita' />

        <Box
          title='No upcoming house party'
          subtitle='Plan your house party'
          button={{
            text: 'CREATE A NEW EVENT',
            onClick: () => {},
            size: 'lg',
          }}
        />

        <div className='o-row mt-8'>
          <div className='o-col-xxs-6 o-col-sm-8'>
            <Card title='Dan birthday' time='8:00 PM' date='12/2/2022' />
          </div>

          <div className='o-col-xxs-6 o-col-sm-8'>
            <Card title='Shiva anniversary' time='8:00 PM' date='12/2/2022' />
          </div>
        </div>
      </div>
    </>
  );
}
