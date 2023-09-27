import { EventCreatorModel } from 'src/modules/event/types';

const EVENT_DATA: EventCreatorModel[] = [
  {
    title: 'Whats the occasion ?',
    type: 'box',
    data: [
      {
        title: 'Birthday',
      },
      {
        title: 'Anniversary',
      },
      {
        title: 'Dinner',
      },
      {
        title: 'Meetup',
      },
      {
        title: 'Others',
      },
    ],
  },
  {
    title: 'Whats is the size of the guests lists ?',
    type: 'box',
    data: [
      {
        title: 'Small',
        detail: '4 - 20 guests',
      },
      {
        title: 'Medium',
        detail: '20 - 60 guests',
      },
      {
        title: 'Large',
        detail: '60+ guests',
      },
    ],
  },
];

export default EVENT_DATA;
