import { EventCreatorModel } from './types';

export const EVENT_CREATOR_CONFIG: EventCreatorModel[] = [
  {
    title: 'Whats the occasion ?',
    type: 'select',
    id: 'occasion-1',
    data: [
      {
        title: 'Birthday',
        value: 'birthday',
      },
      {
        title: 'Anniversary',
        value: 'anniversary',
      },
      {
        title: 'Dinner',
        value: 'dinner',
      },
      {
        title: 'Meetup',
        value: 'meetup',
      },
      {
        title: 'Others',
        value: 'others',
      },
    ],
  },
  {
    title: 'Whats is the size of the guests lists ?',
    type: 'select',
    id: 'occasion-2',
    data: [
      {
        title: 'Small',
        detail: '4 - 20 guests',
        value: '4 - 20 guests',
      },
      {
        title: 'Medium',
        detail: '20 - 60 guests',
        value: '20 - 60 guests',
      },
      {
        title: 'Large',
        detail: '60+ guests',
        value: '60+ guests',
      },
    ],
  },
];
