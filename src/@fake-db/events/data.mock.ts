import { PrevEventModel, UpcomingEventModel } from 'src/modules/event/types';

// export const EVENT_CREATOR_DATA: EventCreatorModel[] = [
//   {
//     title: 'Whats the occasion ?',
//     type: 'box',
//     data: [
//       {
//         title: 'Birthday',
//       },
//       {
//         title: 'Anniversary',
//       },
//       {
//         title: 'Dinner',
//       },
//       {
//         title: 'Meetup',
//       },
//       {
//         title: 'Others',
//       },
//     ],
//   },
//   {
//     title: 'Whats is the size of the guests lists ?',
//     type: 'box',
//     data: [
//       {
//         title: 'Small',
//         detail: '4 - 20 guests',
//       },
//       {
//         title: 'Medium',
//         detail: '20 - 60 guests',
//       },
//       {
//         title: 'Large',
//         detail: '60+ guests',
//       },
//     ],
//   },
// ];

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
