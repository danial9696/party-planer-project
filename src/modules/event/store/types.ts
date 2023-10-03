import { PrevEventModel, UpcomingEventModel } from '../types';

export default interface EventStoreModel {
  prev: PrevEventModel[];
  upcoming: UpcomingEventModel[];
  actions: {
    setUpcoming: (data: UpcomingEventModel[]) => void;
    setPrev: (data: PrevEventModel[]) => void;
  };
}
