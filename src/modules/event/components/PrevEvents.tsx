import CustomCard from '@components/card/CustomCard';
import React from 'react';
import { PrevEventsProps } from './types';

function PrevEvents(props: PrevEventsProps) {
  return (
    <div className='o-row mt-8'>
      <h3 className='mb-6'>Previous House Parties</h3>

      <div className='o-col-xxs-6 o-col-sm-8'>
        <CustomCard title='Dan birthday' time='8:00 PM' date='12/2/2022' />
      </div>

      <div className='o-col-xxs-6 o-col-sm-8'>
        <CustomCard title='Shiva anniversary' time='8:00 PM' date='12/2/2022' />
      </div>
    </div>
  );
}

export default PrevEvents;
