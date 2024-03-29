import { PrevEventModel, UpcomingEventModel } from 'src/modules/event/types';

export const EVENTS: {
  upcoming: UpcomingEventModel[];
  prev: PrevEventModel[];
} = {
  upcoming: [
    // {
    //   date: '2',
    //   done: 3,
    //   time: '',
    //   title: '',
    //   todo: 2,
    //   detail: '',
    // },
  ],
  prev: [
    {
      date: 'yesterday',
      time: '2 PM',
      title: 'Dan birthday',
    },
    {
      date: '14/07/2021',
      time: '10 PM',
      title: 'Shiva birthday',
    },
  ],
};
