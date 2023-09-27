interface ConfigModel {
  title: string;
  type: 'form' | 'box' | 'options';
  data: { title: string; detail?: string }[];
}

const config: ConfigModel[] = [
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
