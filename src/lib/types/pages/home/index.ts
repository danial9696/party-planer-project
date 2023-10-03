import { PrevEventModel, UpcomingEventModel } from 'src/modules/event/types';

export default interface Props {
  upcoming: UpcomingEventModel[];
  prev: PrevEventModel[];
}
