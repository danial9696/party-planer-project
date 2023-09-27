export interface EventCreatorModel {
  title: string;
  type: 'form' | 'box' | 'options';
  data: { title: string; detail?: string }[];
}

const config: EventCreatorModel[] = [
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
];
