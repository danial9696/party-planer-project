import { EventCreatorModel } from '@modules/event-creator/types';

const creator = (model: EventCreatorModel) => {
  const { data } = model;

  switch (model.type) {
    case 'select':
      // data.map(item)

      break;

    default:
      break;
  }
};
