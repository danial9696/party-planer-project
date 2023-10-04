import { useEventCreatorStore } from './store';

// ! Export atomic selectors states to prevent subscribe to unnecessary state data

export const useEventCreatorState = () => useEventCreatorStore(state => state.model);
