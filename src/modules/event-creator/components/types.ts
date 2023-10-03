import { EventCreatorModel } from '../types';

export interface DialogContainerProps {
  open: boolean;
  closeHandler: () => void;
}

export default interface Props {
  model: EventCreatorModel[];
}
