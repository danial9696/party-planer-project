import { PrevEventModel, UpcomingEventModel } from '../types';

export interface PrevEventsProps {
  data: PrevEventModel[];
}

export default interface Props {
  upcoming: UpcomingEventModel[];
  prev: PrevEventModel[];
}
