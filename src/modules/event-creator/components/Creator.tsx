import React from 'react';
import Props from './types';
import CustomCard from '@components/card/CustomCard';

function Creator(props: Props) {
  return (
    <>
      <p>testtttttttttt</p>
      {props.model.map(item => {
        const { data } = item;

        switch (item.type) {
          case 'select':
            return (
              <div>
                {data.map(el => (
                  <CustomCard title={el.title} date={''} time={''} />
                ))}
              </div>
            );

          default:
            break;
        }
      })}
    </>
  );
}

export default Creator;
