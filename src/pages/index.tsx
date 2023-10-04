import service from '@api';
import Props from '@lib/types/pages/home';
import Events, { useEventActions } from '@modules/event';
import Head from 'next/head';
import Header from 'src/layout/header/Header';

export default function Home(props: Props) {
  const eventActions = useEventActions();

  eventActions.setPrev(props.prev);

  eventActions.setUpcoming(props.upcoming);

  return (
    <>
      <div className='o-container'>
        <Header title='Hi, Ishita' />

        <Events />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await service.get<{ data: Props }>('/events');

  return { props: { ...response.data } };
}
