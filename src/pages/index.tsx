import service from '@api';
import Props from '@lib/types/pages/home';
import Events, { useEventActions } from '@modules/event';
import Head from 'next/head';
import Header from 'src/layout/header/Header';

export default function Home(props: Props) {
  // console.log('props', props);

  const eventActions = useEventActions();

  eventActions.setPrev(props.prev);

  eventActions.setUpcoming(props.upcoming);

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

        <Events upcoming={props.upcoming} prev={props.prev} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await service.get<{ data: any }>('/events');

  return { props: { ...response.data } };
}
