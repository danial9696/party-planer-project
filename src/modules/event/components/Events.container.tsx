import Box from '@components/box/Box';
import Showcase from '@components/showcase/Showcase';
import PrevEvents from './PrevEvents';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { usePrevEventState, useUpcomingEventState } from '../store/selector';

const DialogContainer = dynamic(
  () => import('@modules/event-creator/components/Dialog.container'),
  {
    loading: () => <p>Loading...</p>,
  },
);

/* The `Events` function is a React component that renders a section for displaying upcoming and
previous events. */
function Events(): JSX.Element {
  const upcomingEvents = useUpcomingEventState();
  const prevEvents = usePrevEventState();

  const noUpcoming = upcomingEvents.length === 0;
  const noPrevEvent = prevEvents.length === 0;

  const [open, setOpen] = useState(false);

  return (
    <div className='my-8'>
      <DialogContainer open={open} closeHandler={() => setOpen(false)} />

      {noUpcoming ? (
        <Box
          title='No upcoming house party'
          subtitle='Plan your house party'
          button={{
            text: 'CREATE A NEW EVENT',
            onClick: () => setOpen(true),
            size: 'lg',
          }}
        />
      ) : (
        <Showcase title='Saras birthday party' detail='10 days to go' />
      )}

      {!noPrevEvent ? <PrevEvents data={prevEvents} /> : null}
    </div>
  );
}

export default Events;
